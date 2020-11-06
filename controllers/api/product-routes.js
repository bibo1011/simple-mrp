const router = require('express').Router();
const { User, Product, Part } = require('../../models');

router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
            'id',
            'product_name',
            'model',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
            {
                model: Part,
                attributes: ['id', 'part_number', 'part_name', 'description', 'quantity']
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
    Product.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
            'id',
            'product_name',
            'model'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
            {
                model: Part,
                attributes: ['id', 'part_number', 'part_name', 'description', 'quantity']
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
router.post('/', (req, res) => {
    Product.create({
      product_name: req.body.product_name,
      model: req.body.model,
      user_id: req.body.description,
      part_id: req.body.part_id
    })
    .then(dbProductData => res.json(dbProductData))
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

