const {Model, DataTypes} = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/connection');

class Part extends Model{}

Part.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        part_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        part_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }   
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'part'
    }
);
module.exports = Part;