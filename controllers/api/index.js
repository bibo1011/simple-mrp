const router = require('express').Router();

const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const partRoutes = require('./part-routes');
const overview = require('./overview-routes')

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/parts', partRoutes);
router.use('/overview', overview);


module.exports = router;