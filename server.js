const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => console.log('Server running'));
