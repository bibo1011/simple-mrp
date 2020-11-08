const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.STRING,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        part_number: {
            type: DataTypes.STRING,
            references: {
                model: 'part',
                key: 'part_number'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product-tag'
    }
);
module.exports = ProductTag;
