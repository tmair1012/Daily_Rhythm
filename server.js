//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
const path = require('path');

const hbs = exphbs.create({});




const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./controllers'));


// create sequelize session using express-session and sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const sess = {
  secret: 'wow secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// middleware connects handlebars, requires routes

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// turn on connection to db and server - connecting to sequelize server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() { console.log('Now listening on Port ' + PORT)});
});
