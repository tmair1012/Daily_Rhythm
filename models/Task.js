const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        PrimaryKey: true,
        autoIncrement: true,
    },
    task_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    task_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        sequelize,
        timestamps: true,
        modelName: 'Task'
});

module.exports = Task;