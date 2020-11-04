const router = require('express').Router();

const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const partRoutes = require('./part-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/parts', partRoutes);

module.exports = router;