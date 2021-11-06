const app = require('express').Router();

// create login and password
app.get('/', (req, res) => {
    res.render('homepage');
  });

  // Route to Login Page
app.get('/login', (req, res) => {
    res.render('login');
  });
  app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });

  module.exports = app;