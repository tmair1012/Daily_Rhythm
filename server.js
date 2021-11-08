//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');

// create sequelize session using express-session and sequelize store
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
const Sequelize = require('sequelize');
const myDatabase = sequelize;
const sequelizeSessionStore = new SessionStore({
  db: myDatabase,
});

// middleware connects handlebars, requires routes
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(routes);



// turn on connection to db and server - connecting to sequelize server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() { console.log('Now listening')});
});