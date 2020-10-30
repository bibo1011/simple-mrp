const {Model, Datatypes} = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');

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
            type: Datatypes.INTEGER,
            allowNull: false
        },
        part_name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }   
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        quantity: {
            type: Datatypes.INTEGER,
            allowNull: false,
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