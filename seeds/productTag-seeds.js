const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        part_number: '20200-0001',
        quantity: 1
    },
    {
        product_id: 1,
        part_number: '20200-0002',
        quantity: 1
    },
    {
        product_id: 1,
        part_number: '20200-0003',
        quantity: 1
    },
    {
        product_id: 1,
        part_number: '20200-0004',
        quantity: 1
    },
    {
        product_id: 1,
        part_number: '20200-0005',
        quantity: 4
    },
    {
        product_id: 1,
        part_number: '20200-0006',
        quantity: 4
    },
    {
        product_id: 2,
        part_number: '20200-0001',
        quantity: 1
    },
    {
        product_id: 2,
        part_number: '20200-0012',
        quantity: 2
    },
    {
        product_id: 2,
        part_number: '20200-0013',
        quantity: 4
    },
    {
        product_id: 2,
        part_number: '20200-0014',
        quantity: 4
    },
    {
        product_id: 2,
        part_number: '20200-0015',
        quantity: 1
    },
    {
        product_id: 2,
        part_number: '20200-0008',
        quantity: 1
    },
    {
        product_id: 2,
        part_number: '20200-0017',
        quantity: 1
    },
    {
        product_id: 2,
        part_number: '20200-00016',
        quantity: 1
    },
    {
        product_id: 3,
        part_number: '20200-0002',
        quantity: 2
    },
    {
        product_id: 3,
        part_number: '20200-0004',
        quantity: 2
    },
    {
        product_id: 3,
        part_number: '20200-0005',
        quantity: 2
    },
    {
        product_id: 3,
        part_number: '20200-0007',
        quantity: 2
    },
    {
        product_id: 3,
        part_number: '20200-0009',
        quantity: 2
    },
    {
        product_id: 3,
        part_number: '20200-0012',
        quantity: 2

    },
    {
        product_id: 4,
        part_number: '20200-0002',
        quantity: 2
    },
    {
        product_id: 4,
        part_number: '20200-0004',
        quantity: 2
    },
    {
        product_id: 4,
        part_number: '20200-0005',
        quantity: 2
    },
    {
        product_id: 4,
        part_number: '20200-0007',
        quantity: 2
    },
    {
        product_id: 4,
        part_number: '20200-0009',
        quantity: 2
    },
    {
        product_id: 4,
        part_number: '20200-0012',
        quantity: 2

    },
    {
        product_id: 5,
        part_number: '20200-0002',
        quantity: 2
    },
    {
        product_id: 5,
        part_number: '20200-0004',
        quantity: 2
    },
    {
        product_id: 5,
        part_number: '20200-0005',
        quantity: 2
    },
    {
        product_id: 5,
        part_number: '20200-0006',
        quantity: 2
    },
    {
        product_id: 5,
        part_number: '20200-0009',
        quantity: 2
    },
    {
        product_id: 5,
        part_number: '20200-0012',
        quantity: 2

    },
    {
        product_id: 6,
        part_number: '20200-0002',
        quantity: 2
    },
    {
        product_id: 6,
        part_number: '20200-0004',
        quantity: 2
    },
    {
        product_id: 6,
        part_number: '20200-0005',
        quantity: 2
    },
    {
        product_id: 6,
        part_number: '20200-0008',
        quantity: 2
    },
    {
        product_id: 6,
        part_number: '20200-0009',
        quantity: 2
    },
    {
        product_id: 6,
        part_number: '20200-0012',
        quantity: 2

    }
]

const seedProductTag = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTag;