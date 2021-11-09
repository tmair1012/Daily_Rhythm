const sequelize = require('../config/connection');
const { User } = require('../models/');

const userInfo = [
    { username: 'tyler_mair',
      email: 'tyleramair@gmail.com',
      password: 'password'  
}
]

const seedUsers = () => User.bulkCreate(userInfo, {individualHooks: true})
module.exports = seedUsers;