const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        email: 'blue@ucbmotors.com',
<<<<<<< HEAD
        password: '$2b$10$GG.Cuxjriwg90dnN.E5k7uucjGVLk0hEgvPluMjRexCOhBy7DA6xm'
=======
        password: '$2b$10$Z0tZi9YkpuI.3YBJriDt9uZQThyLgfnGC2bK/0CzXw8XxULq73GfG'
>>>>>>> feature/model
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