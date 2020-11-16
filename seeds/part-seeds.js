const { Part } = require('../models');

const partData = [
    {
        part_number: '20200-0001',
        part_name: 'Chasis',
        description: 'Base frame',
        quantity: 1479,
    },
    {
        part_number: '20200-0002',
        part_name: 'Body',
        description: 'outer covering',
        quantity: 3450,
    },
    {
        part_number: '20200-0003',
        part_name: 'Engine',
        description: 'Motor',
        quantity: 4250,
    },
    {
        part_number: '20200-0004',
        part_name: 'RF-Caliper',
        description: 'Caliper Assembly',
        quantity: 3455,
    },
    {
        part_number: '20200-0005',
        part_name: 'door',
        description: 'hinged',
        quantity: 4669,
    },
    {
        part_number: '20200-0006',
        part_name: 'window',
        description: 'tampered glass',
        quantity: 3496,
    },
    {
        part_number: '20200-0007',
        part_name: 'LF-Axle',
        description: ' Drive Axle',
        quantity: 2457,
    },
    {
        part_number: '20200-0008',
        part_name: 'RF-Axle',
        description: 'Drive Axle',
        quantity: 3458,
    },
    {
        part_number: '20200-0009',
        part_name: 'wheel',
        description: 'rim',
        quantity: 3487,
    },
    {
        part_number: '20200-0010',
        part_name: 'LF-Caliper',
        description: 'Caliper Assembly',
        quantity: 4879,
    },
    {
        part_number: '20200-0011',
        part_name: 'RR-Caliper',
        description: 'Caliper Assembly',
        quantity: 5785,
    },
    {
        part_number: '20200-0012',
        part_name: 'LR-Caliper',
        description: 'Caliper Assembly',
        quantity: 1248,
    },
    {
        part_number: '20200-0013',
        part_name: 'Front-Brake',
        description: 'Brake Pad Assembly',
        quantity: 3569,
    },
    {
        part_number: '20200-0014',
        part_name: 'Rear-Brake',
        description: 'Brake Pad Assembly',
        quantity: 4523,
    },
    {
        part_number: '20200-0015',
        part_name: 'LF-Bucket-Seat',
        description: 'Front Row Driver Seat',
        quantity: 2365,
    },
    {
        part_number: '20200-0016',
        part_name: 'RF-Bucket-Seat',
        description: 'Front Row Passenger Seat',
        quantity: 1245,
    }
];

const seedParts = () => Part.bulkCreate(partData);

module.exports = seedParts;