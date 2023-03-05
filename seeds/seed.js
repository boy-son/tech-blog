const sequelize = require('../config/connection');
const { User, Comment, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
await sequelize.sync({force: true});

}
