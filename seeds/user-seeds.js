const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        email: 'blue@ucbmotors.com',
        password: '$2b$10$GG.Cuxjriwg90dnN.E5k7uucjGVLk0hEgvPluMjRexCOhBy7DA6xm'
    },
    {
        email: 'hameed@ucbmotors.com',
        password: '$2b$10$GG.Cuxjriwg90dnN.E5k7uucjGVLk0hEgvPluMjRexCOhBy7DA6xm'
    },
    {
        email: 'amokeye@ucbmotors.com',
        password: '$2b$10$GG.Cuxjriwg90dnN.E5k7uucjGVLk0hEgvPluMjRexCOhBy7DA6xm'
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;