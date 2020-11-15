const router = require('express').Router();
const { User, Product, Part, ProductTag } = require('../../models');

router.get('/', (req, res) => {
    Product.findAll({
        // raw:true,
        attributes: [
            'id',
            'product_name',
            'model',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            },
            {
                model: Part,
                attributes: ['part_number', 'part_name', 'description', 'quantity']
            }
            // User,Part
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
          user_email: req.params.id
        },
        raw:false,
        attributes: [
            'id',
            'product_name',
            'model'
        ],
        include: [
            {
                model: User,
                attributes: ['email']
                // User,Part
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
router.post('/', (req, res) => {
    /* req.body should look like this....
        {
            "product_name": "Mercedez",
            "model": "GLA 450",
            "user_email": "hameed@ucbmotors.com",
            "parts":[
                {"part_number":"20200-0002", "quantity":3},
                {"part_number":"20200-0006", "quantity":3},
                {"part_number":"20200-0004", "quantity":3},
                {"part_number":"20200-0013", "quantity":3},
                {"part_number":"20200-0012", "quantity":3}
            ]
        }
        */
    Product.create({
      product_name: req.body.product_name,
      model: req.body.model,
      user_email: req.body.user_email
    })
    .then(ProductData =>{
        if(req.body.parts.length>0){
            const partsUsedArr = req.body.parts;
            const productPartsArr = req.body.parts.map((parts) =>{
            return{
                product_id: ProductData.id,
                part_number: parts.part_number,
                quantity: parts.quantity

            };
        });
        partsUsedArr.forEach(part => {
            Part.decrement('quantity',{by:part.quantity, where:{part_number:part.part_number}});
        });
        return ProductTag.bulkCreate(productPartsArr);
    }
    res.status(200).json(ProductData);
    })
    .then((productParts) =>{
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

