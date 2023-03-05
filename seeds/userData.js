const { User } = require('../models');

const userData = [
    {
        username: 'testuser1',
        password: 'password12345'
    },
    {
        username: 'testuser2',
        password: 'passwordabcde'
    },
    {
        username: 'testuser3',
        password: 'passwordfghij'
    },
    {
        username: 'testuser4',
        password: 'passwordklmno'
    },
    {
        username: 'testuser5',
        password: 'passwordpqrst'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;