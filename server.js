const express = require('express');
const router = require('./controllers/api/task-routes');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// turn on routes
//app.use(require('./controllers/api/task-routes'))

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function() { console.log('Now listening')});
});

// create login and password
app.get('/', (req, res) => {
    res.render(__dirname + '/static/index.html');
  });

  // Route to Login Page
app.get('/login', (req, res) => {
    res.render(__dirname + '/static/login.html');
  });
  app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });
