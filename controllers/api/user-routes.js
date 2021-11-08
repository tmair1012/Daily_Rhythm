const router = require('express').Router();

const { User } = require('../../models/Rhythm-user');

//Get All users

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Gets a single User
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


//Create a User
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUser => {
        req.session.save(() => {
            req.session.user_id = dbUser.id,
            req.session.username = dbUser.username,
            req.session.loggedIn = true;

            res.json(dbUser);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUser => {
        if(!dbUser) {
            res.status(400).json({ message: 'No user with that email exists'});
            return;
        }

        const okPass = dbUser.checkPassword(req.body.password);

        if(!okPass) {
            res.status(400).json({ message: 'incorrect Password!' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUser.id
            req.session.loggedIn = true;

            res.json({ user: dbUser, message: 'You are logged in' })
        })
    })
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
        else {
            res.status(404).end();
        }
    })







module.exports = router;