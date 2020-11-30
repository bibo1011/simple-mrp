const router = require('express').Router();
const { User, Product, Part, ProductTag } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Product.findAll({
        include: [
            {
                model: User,
                attributes: ['email']
            },
            {
                model: Part,
                attributes: ['part_number', 'part_name', 'description', 'quantity']
            }
        ]
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    Product.findAll({
        where: {
          user_id: req.params.id
        },
        raw:false,
        attributes: [
            'id',
            'product_name',
            'model',
            'isCompleted',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
            {
                model: Part,
                attributes: ['part_number', 'part_name', 'description', 'quantity']
            }
        ]
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No Product found with this id' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
    console.log("body is ");
    console.log(req.body);
    Product.create({
        product_name: req.body.product_name,
        model: req.body.model,
        user_id: req.session.user_id,
        isCompleted: true
    })
        .then(ProductData => {
            if (req.body.parts.length > 0) {
                const partsUsedArr = req.body.parts;
                const productPartsArr = req.body.parts.map((parts) => {
                    return {
                        product_id: ProductData.id,
                        part_number: parts.part_number,
                        quantity: parts.quantity
                    };
                });
                partsUsedArr.forEach(part => {
                    Part.decrement('quantity', { by: part.quantity, where: { part_number: part.part_number } });
                });
                return ProductTag.bulkCreate(productPartsArr);
            }
            res.status(200).json(ProductData);
        })
        .then((productParts) => {
            res.status(200).json(productParts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.put('/:id', (req, res) => {
    Product.update(
        {
            product_name: req.body.product_name
        },
        {
            where: {
            id: req.params.id
            }
        }
    )
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });
  
  module.exports = router;

