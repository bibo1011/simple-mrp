const router = require('express').Router();
const { Part } = require('../../models');

router.get('/', (req, res) => {
    console.log('======================');
    Part.findAll({
        attributes: [
            'id',
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
router.get('/:id', (req, res) => {
    Part.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
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
      description: req.session.description,
      quantity: req.body.quantity
    })
    .then(dbPartData => res.json(dbPartData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', (req, res) => {
    Part.update(
        {
            part_name: req.body.part_name
        },
        {
            where: {
            id: req.params.id
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
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Part.destroy({
        where: {
            id: req.params.id
        }
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
  
  module.exports = router;
  
  