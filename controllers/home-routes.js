// Dependencies
const router = require('express').Router();
const { Part, Product, User } = require('../models');

// REST API HTTP requests
// router.get('/', (req, res) => {
//     Product.findAll({
//         include: [User]
//     }).then(data => {
//         const prodData = data.map(product => product.get({plain: true}))
//         res.render('products', {prodData})
//     }).catch(err => {
//         res.status(500).json(err)
//     })
// });


router.get('/products/:id', (req, res) => {
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


router.get('/parts', (req, res) => {
    Part.findAll({
       attributes: [
        'part_number',
        'part_name',
        'description',
        'quantity' 
       ] 
    })
    .then(data => {
            const parts = data.map(part =>part.get({
                plain: true
            }));
            console.log(parts);
            res.render('parts', {parts})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('login')
})


// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/')
//         return;
//     }
//     res.render('signup')
// })


// Command to export code
module.exports = router;