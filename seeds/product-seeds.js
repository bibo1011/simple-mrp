const {Product} = require('../models');

const productData = [
    {
        product_name: 'Toyota',
        model: '4runner',
        // user_email: 'hameed@ucbmotors.com'
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        // user_email: 'blue@ucbmotors.com'
        user_id: 1
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        // user_email: 'amokeye@ucbmotors.com'
        user_id: 3
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        // user_email: 'blue@ucbmotors.com'
        user_id: 1
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
        // user_email: 'hameed@ucbmotors.com'
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        // user_email: 'amokeye@ucbmotors.com'
        user_id: 3
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;