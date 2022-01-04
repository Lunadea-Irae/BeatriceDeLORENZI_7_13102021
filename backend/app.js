const express = require('express');
const helmet = require("helmet");
const app = express();
const cors = require('cors');
const topicRoutes = require('./routes/topics');
const userRoutes = require('./routes/user');
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config();


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connexion DB
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/topics', topicRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;