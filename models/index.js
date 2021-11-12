const Task = require('./Task');
const User = require('./Rhythm-user');


// create associations
User.hasMany(Task, {
  foreignKey: {allowNull: true}, onDelete: 'CASCADE'});


Task.belongsTo(User, {
  foreignKey: {allowNull: true}, onDelete: 'CASCADE'});



module.exports = { User, Task };

