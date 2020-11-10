const router = require('express').Router();
const { Part } = require('../../models');

router.get('/', (req, res) => {
    console.log('======================');
    Part.findAll({
        attributes: [
            // 'id',
            'part_number',
            'part_name',
            'description',
            'quantity',
        ]
    })
    .then(dbPartData => res.json(dbPartData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:part_number', (req, res) => {
    Part.findOne({
        where: {
            part_number: req.params.part_number
        },
        attributes: [
            // 'id',
            'part_number',
            'part_name',
            'description',
            'quantity',
        ]
    })
    .then(dbPartData => {
        if (!dbPartData) {
            res.status(404).json({ message: 'No part found with this id' });
            return;
        }
        res.json(dbPartData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
    Part.create({
      part_number: req.body.part_number,
      part_name: req.body.part_name,
      description: req.body.description,
      quantity: req.body.quantity
    })
    .then(dbPartData => res.json(dbPartData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:part_number', (req, res) => {
    Part.update(
        {
            part_name: req.body.part_name,
            description: req.body.description,
            quantity: req.body.quantity
        },
        {
            where: {
            part_number: req.params.part_number
            }
        }
    )
    .then(dbPartData => {
        if (!dbPartData) {
            res.status(404).json({ message: 'No part found with this id' });
            return;
        }
        res.json(dbPartData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:part_number', (req, res) => {
    console.log('part_number', req.params.part_number);
    Part.destroy({
        where: {
            part_number: req.params.part_number
        }
    })
    .then(dbPartData => {
        if (!dbPartData) {
            res.status(404).json({ message: 'No part found with this part_number' });
            return;
        }
        res.json(dbPartData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
  module.exports = router;
  
  