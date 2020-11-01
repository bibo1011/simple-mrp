const User = require('./User');
const Product = require('./Product');
const Part = require('./Part');

User.hasMany(Product, {
    foreignKey: 'user_id'
});
Product.belongsTo(User, {
    foreignKey: 'product_id'
});
Product.hasMany(Part, {
    foreignKey: 'product_id'
});
Part.belongsToMany(Product, {
    foreignKey: 'part_id'
});

module.exports = {User, Product, Part};
