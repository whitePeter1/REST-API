const express = require('express')
const router = express();
const path = require('path')
const {allproducts1} = require('../controller/helpers/index')
const {mainroute,allproducts,addProduct,removeProduct,delet} = require('../controller/product')
const product = require('../models/product')
const {allproducts123,allproductsdelete,allproductspost, allproductsupdate} = require('../controller/allproductsjson')
require('dotenv/config')
//ROUTES add product get
router.get('/', mainroute);
router.get('/all-products', allproducts)
router.get('/all-products/json', allproducts123)
router.delete('/all-products/json', allproductsdelete)
router.post('/all-products/json',allproductspost)
router.put('/all-products/json',allproductsupdate)
// Post route to add product
router.post('/add-product',addProduct)
// Remove a product based on ID
router.post('/remove', removeProduct)
router.get('/delet/:ProductName', delet)
module.exports = router;
