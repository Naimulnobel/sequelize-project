const sequelize = require('../config/seqlizedb')
const { Sequelize, DataTypes } = require('sequelize')

const UserModel = sequelize.define(
    'users',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        full_name: {
            type: Sequelize.STRING,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING,
        },
    },
)

module.exports = UserModel
