const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Part extends Model{}

Part.init(
    {
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
            min: 0
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