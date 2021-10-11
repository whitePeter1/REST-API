const express = require('express')
const router = express();
const path = require('path')
const {allproducts1} = require('../controller/helpers/index')
const {mainroute,allproducts,addProduct,removeProduct,delet} = require('../controller/product')
const product = require('../models/product')
require('dotenv/config')
//ROUTES add product get
router.get('/', mainroute);
router.get('/all-products', allproducts)
router.get('/all-products/json', (req,res)=>{
    product.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>
        {
        console.log(err)
    })
})
// Post route to add product
router.post('/add-product',addProduct)
// Remove a product based on ID
router.post('/remove', removeProduct)
router.get('/delet/:ProductName', delet)
module.exports = router;
