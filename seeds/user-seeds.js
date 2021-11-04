const sequelize = require('..config/connection');
const { User, Post } = require('../models');

const userInfo = [
    { username: 'tyler_mair',
      email: 'tyleramair@gmail.com',
      password: 'password'  
}
]