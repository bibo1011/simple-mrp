const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        part_id: 1
    },
    {
        product_id: 1,
        part_id: 2
    },
    {
        product_id: 1,
        part_id: 3
    },
    {
        product_id: 1,
        part_id: 4
    },
    {
        product_id: 1,
        part_id: 5
    },
    {
        product_id: 1,
        part_id: 6
    },
    {
        product_id: 2,
        part_id: 1
    },
    {
        product_id: 2,
        part_id: 2
    },
    {
        product_id: 2,
        part_id: 3
    },
    {
        product_id: 2,
        part_id: 4
    },
    {
        product_id: 2,
        part_id: 5
    },
    {
        product_id: 2,
        part_id: 6
    },
    {
        product_id: 3,
        part_id: 1
    },
    {
        product_id: 3,
        part_id: 2
    },
    {
        product_id: 3,
        part_id: 3
    },
    {
        product_id: 3,
        part_id: 4
    },
    {
        product_id: 3,
        part_id: 5
    },
    {
        product_id: 3,
        part_id: 6
    },
]

const seedProductTag = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTag;