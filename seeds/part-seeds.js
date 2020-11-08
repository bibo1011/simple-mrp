const { Part } = require('../models');

const partData = [
    {
        part_number: '2020-001',
        part_name: 'chasis',
        description: 'base frame',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-002',
        part_name: 'body',
        description: 'outer covering',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-003',
        part_name: 'engine',
        description: 'motor',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-004',
        part_name: 'wheel',
        description: 'rims and tires',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-005',
        part_name: 'door',
        description: 'hinged',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-006',
        part_name: 'window',
        description: 'tampered glass',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-002',
        part_name: 'body',
        description: 'outer covering',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-003',
        part_name: 'engine',
        description: 'motor',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-004',
        part_name: 'wheel',
        description: 'rims and tires',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-005',
        part_name: 'door',
        description: 'hinged',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-006',
        part_name: 'window',
        description: 'tampered glass',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-002',
        part_name: 'body',
        description: 'outer covering',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-003',
        part_name: 'engine',
        description: 'motor',
        quantity: 1,
        // product_id: 1
    },
    {
        part_number: '2020-004',
        part_name: 'wheel',
        description: 'rims and tires',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-005',
        part_name: 'door',
        description: 'hinged',
        quantity: 4,
        // product_id: 1
    },
    {
        part_number: '2020-006',
        part_name: 'window',
        description: 'tampered glass',
        quantity: 4,
        // product_id: 1
    }
];

const seedParts = () => Part.bulkCreate(partData);

module.exports = seedParts;