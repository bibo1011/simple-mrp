const {Product} = require('../models');

const productData = [
    {
        product_name: 'Toyota',
        model: '4runner',
        user_email: 'hameed@ucbmotors.com',
        status: ''
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_email: 'blue@ucbmotors.com',
        status: ''
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        user_email: 'amokeye@ucbmotors.com',
        status: ''
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        user_email: 'blue@ucbmotors.com',
        status: ''
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
        user_email: 'hameed@ucbmotors.com',
        status: ''
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_email: 'amokeye@ucbmotors.com',
        status: ''
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;