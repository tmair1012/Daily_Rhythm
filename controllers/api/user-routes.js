const router = require('express').Router();
const { emitWarning } = require('process');
const { User } = require('../../models');

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
        username: req.body.username,
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