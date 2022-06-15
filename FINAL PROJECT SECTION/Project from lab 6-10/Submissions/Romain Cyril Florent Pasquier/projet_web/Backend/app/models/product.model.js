const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    category: String,
    name: String,
    price: Number,
    acount: Number,
    rating: {type: Number,
            default: 0},
    description: String,
    image: String
});
module.exports = mongoose.model('Product', ProductSchema);