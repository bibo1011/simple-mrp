const { Part } = require('../models');

const partData = [
    {
        part_number: '20200-0001',
        part_name: 'Chasis',
        description: 'Base frame',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0002',
        part_name: 'Body',
        description: 'outer covering',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0003',
        part_name: 'Engine',
        description: 'Motor',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0004',
        part_name: 'RF Caliper',
        description: 'Caliper Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0005',
        part_name: 'door',
        description: 'hinged',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0006',
        part_name: 'window',
        description: 'tampered glass',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0007',
        part_name: 'LF Axle',
        description: ' Drive Axle',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0008',
        part_name: 'RF Axle',
        description: 'Drive Axle',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0009',
        part_name: 'wheel',
        description: 'rim',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0010',
        part_name: 'LF Caliper',
        description: 'Caliper Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0011',
        part_name: 'RR Caliper',
        description: 'Caliper Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0012',
        part_name: 'LR Caliper',
        description: 'Caliper Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0013',
        part_name: 'Front Brake',
        description: 'Brake Pad Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0014',
        part_name: 'Rear Brake',
        description: 'Brake Pad Assembly',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0015',
        part_name: 'LF Bucket Seat',
        description: 'Front Row Driver Seat',
        quantity: 99999,
        // product_id: 1
    },
    {
        part_number: '20200-0016',
        part_name: 'RF Bucket Seat',
        description: 'Front Row Passenger Seat',
        quantity: 4,
        // product_id: 1
    }
];

const seedParts = () => Part.bulkCreate(partData);

module.exports = seedParts;