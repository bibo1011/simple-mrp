const User = require('./User');
const Product = require('./Product');
const Part = require('./Part');
const ProductTag = require('./ProductTag');

User.hasMany(Product);
Product.belongsTo(User, {
    foreignKey: 'user_email',
});

Part.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'part_number'
    
});

Product.belongsToMany(Part,{
    through: ProductTag,
    foreignKey: 'product_id'
} );



module.exports = {User, Product, Part, ProductTag};
