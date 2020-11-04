const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        email: 'blue@ucbmotors.com',
        password: 'pass'
    },
    {
        email: 'hameed@ucbmotors.com',
        password: 'pass'
    },
    {
        email: 'amokeye@ucbmotors.com',
        password: 'pass'
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true});
module.exports = seedUsers;