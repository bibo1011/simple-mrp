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
            type: DataTypes.INTEGER,
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
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull: false,
            
        },
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag'
    }
);
module.exports = ProductTag;
