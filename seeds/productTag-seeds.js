const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        part_number: '20200-0001'
    },
    {
        product_id: 1,
        part_number: '20200-0002'
    },
    {
        product_id: 1,
        part_number: '20200-0003'
    },
    {
        product_id: 1,
        part_number: '20200-0004'
    },
    {
        product_id: 1,
        part_number: '20200-0005'
    },
    {
        product_id: 1,
        part_number: '20200-0006'
    },
    {
        product_id: 2,
        part_number: '20200-0001'
    },
    {
        product_id: 2,
        part_number: '20200-0012'
    },
    {
        product_id: 2,
        part_number: '20200-0013'
    },
    {
        product_id: 2,
        part_number: '20200-0014'
    },
    {
        product_id: 2,
        part_number: '20200-0015'
    },
    {
        product_id: 2,
        part_number: '20200-0005'
    },
    {
        product_id: 3,
        part_number: '20200-0002'
    },
    {
        product_id: 3,
        part_number: '20200-0004'
    },
    {
        product_id: 3,
        part_number: '20200-0005'
    },
    {
        product_id: 3,
        part_number: '20200-0007'
    },
    {
        product_id: 3,
        part_number: '20200-0009'
    },
    {
        product_id: 3,
        part_number: '20200-0012'
    },
]

const seedProductTag = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTag;