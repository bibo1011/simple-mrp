const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        email: 'blue@ucbmotors.com',
        password: '$2b$10$Z0tZi9YkpuI.3YBJriDt9uZQThyLgfnGC2bK/0CzXw8XxULq73GfG'
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

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;