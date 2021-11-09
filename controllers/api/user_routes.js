const router = require('express').Router();
const sequelize = require('../../config/connection');
const session = require('express-session');
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
router.post('/signup', (req, res) => {
    console.log("USER",req.body)
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUser => {
        console.log("Signup",dbUser);
        // req.session.save(() => {
        //     req.session.id = dbUser.id,
        //     req.session.username = dbUser.username,
        //     req.session.loggedIn = true;
            
        // });
        res.json(dbUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//Create a new user
router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUser => {
        console.log(dbUser);
        if(!dbUser) {
            res.status(400).json({ message: 'No user with that email exists'});
            return;
        }

        // const okPass = dbUser.checkPassword(req.body.password);

        // if(!okPass) {
        //     res.status(400).json({ message: 'incorrect Password!' })
        //     return;
        // }

        // req.session.save(() => {
        //     req.session.user_id = dbUser.id
        //     req.session.username = dbUser.username
        //     req.session.loggedIn = true;

            res.json({ user: dbUser, message: 'You are logged in' })
        })
    })


//Update User
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbUser => {
        if (!dbUser) {
            res.status(404).json ({ message: 'No user found'});
            return;
        }
        res.json(dbUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//Logout Route
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