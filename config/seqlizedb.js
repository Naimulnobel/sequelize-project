const sequelize = require('sequelize');
const config = require('../config/config.json');
const db = new sequelize(config.development);

module.exports = db;