const express = require('express');
const app = express();
const UserModel = require('./model/user');
const config = require('./config/config.json');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(config.development);
app.use(express.json());
app.get('/', async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (err) {
        res.json(err);
    }
})
app.post('/create', async (req, res) => {
    const { full_name, first_name, last_name } = req.body;
    try {
        const user = await UserModel.create({
            full_name: full_name || '',
            first_name: first_name || '',
            last_name: last_name || '',
        });
        res.json(user);
    } catch (err) {
        res.json(err);
    }
})
sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Unable to connect to the database:', err));
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
