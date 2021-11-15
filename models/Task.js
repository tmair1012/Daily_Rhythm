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
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    time : {
        type: DataTypes.STRING,
        allowNull: true
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'User',
    //         key: 'id',
    //     },
    //     allowNull: true
    // },
},
    {
        sequelize,
        modelName: 'Task'
    }
    );

module.exports = Task;