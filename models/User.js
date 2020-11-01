const {Model, DataTypes} = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {    
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
module.exports = User;