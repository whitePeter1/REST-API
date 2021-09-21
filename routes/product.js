const express = require('express')
const router = express();
const path = require('path')
const productController = require('../controller/product')
const product = require('../models/product')
require('dotenv/config')
//ROUTES add product get
router.get('/', productController.mainroute);
router.get('/all-products', productController.allproducts)
// Post route to add product
router.post('/add-product',productController.addProduct)
// Remove a product based on ID
router.post('/remove', productController.removeProduct)

module.exports = router;
