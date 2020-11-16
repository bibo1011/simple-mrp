const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);
module.exports = Product;