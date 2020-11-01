const User = require('./User');
const Product = require('./Product');
const Part = require('./Part');

Product.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Product, {
    foreignKey: 'product_id'
});
Part.belongsTo(Product, {
    foreignKey: 'product_id'
});
Product.hasMany(Part, {
    foreignKey: 'part_id'
});
module.exports = {User, Product, Part};
