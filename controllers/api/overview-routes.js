const router = require('express').Router();
const { Part, Product } = require('../../models');

router.get('/', (req, res) => {
    Product.findAll({
        // raw:true,
        attributes: [
            'id',
            'isCompleted',
        ],
    })
        .then(dbProductData => {
            Part.findAll({
                attributes: [
                    "quantity",
                    'part_name',
                    'part_number'
                ]
            })
                .then(dbPartData => {
                    console.log(dbProductData);
                    res.json({
                        products: dbProductData,
                        parts:dbPartData,
                    })
                    
            })
        
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.render('overview');
})

module.exports = router;