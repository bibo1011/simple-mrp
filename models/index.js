const User = require('./User');
const Product = require('./Product');
const Part = require('./Part');
const ProductTag = require('./ProductTag');

User.hasMany(Product);
Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Product.belongsToMany(Part,{
    through: ProductTag,
    foreignKey: 'product_id'
} );
Part.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'part_number'
});

module.exports = {User, Product, Part, ProductTag};
