const sequelize = require('../config/connection');
const userData = require('./userData');
const blogPostData = require('./blogPostData');
const commentData = require('./commentData');

const seedDatabase = async () => {
await sequelize.sync({force: true});
await userData();
await blogPostData();
await commentData();
process.exit(0);
};

seedDatabase();