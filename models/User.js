const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // }, 
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            // unique: true,
            validate: {
            isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //   len: [1,30]
            // }
        }
    },
    {    
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            // beforeCreate(userData) {
            //     return bcrypt.hash(userData.password, 10).then(newUserData => {
            //         return newUserData
            //     });
            // }
            // async/await method
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);
module.exports = User;