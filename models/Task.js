const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        sequelize,
        modelName: 'Task'
    }
    );

module.exports = Task;