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
})