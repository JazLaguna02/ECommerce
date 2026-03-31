const mongoose = require('mongoose');

// Define a schema for the Product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create a model for the Product
const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Only this export is needed here