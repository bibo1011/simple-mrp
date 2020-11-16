const {Model, DataTypes} = require('sequelize');
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
    
        ifComplete:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },

        user_email: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'email'
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