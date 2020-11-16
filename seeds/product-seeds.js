const {Product} = require('../models');

const productData = [
    {
        product_name: 'Toyota',
        model: '4runner',
<<<<<<< HEAD
        isCompleted: true,
=======
        isCompleted: false,
>>>>>>> feature/model
        // user_email: 'hameed@ucbmotors.com'
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
<<<<<<< HEAD
        isCompleted: false,
=======
        isCompleted: true,
>>>>>>> feature/model
        // user_email: 'blue@ucbmotors.com'
        user_id: 1
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        isCompleted: false,
        // user_email: 'amokeye@ucbmotors.com'
        user_id: 3
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        isCompleted: true,
        // user_email: 'blue@ucbmotors.com'
        user_id: 1
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
<<<<<<< HEAD
        isCompleted: true,
=======
        isCompleted: false,
>>>>>>> feature/model
        // user_email: 'hameed@ucbmotors.com'
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        isCompleted: true,
        // user_email: 'amokeye@ucbmotors.com'
        user_id: 3
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;