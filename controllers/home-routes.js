// Dependencies
const router = require('express').Router();
const { Part, Product, User } = require('../models');

// REST API HTTP requests
router.get('/', (req, res) => {
    Product.findAll({
        include: [User]
    }).then(data => {
        const products = data.map(product => product.get({plain: true}))
        res.render('all-products', {products})
    }).catch(err => {
        res.status(500).json(err)
    })
});


router.get('/product/:id', (req, res) => {
    Product.findByPk(req.params.id, {
       include: [
           User,
           {
               model: Part,
               include: [User]
           }
       ] 
    }).then(data => {
        if (data === true) {
            const product = data.get({
                plain: true
            })

            res.render('single-product', {product})
        } else {
            res.status(404).end()
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('login')
})


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('signup')
})


// Command to export code
module.exports = router;