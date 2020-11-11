const { Model, DataTypes } = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/connection');

class Part extends Model{}

Part.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        part_number: {
            primaryKey:true,
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[10,10]
            }
        },
        part_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1,30]
            }   
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
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