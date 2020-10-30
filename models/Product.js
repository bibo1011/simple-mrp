const {Model, Datatypes} = require('sequelize');
const bcrpyt = require('bcrypt');
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
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1,3]
            }
        },
        model: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1,3]
            }
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
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