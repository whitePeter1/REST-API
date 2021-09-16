const express = require('express')
const router = express();
const path = require('path')
const product = require('../models/product')
require('dotenv/config')
router.use(express.urlencoded({extended:true}))
router.use(express.json())
router.set('view engine', 'ejs')
//ROUTES add product get
router.get('/', (req,res)=>{
    res.send("Products main page")
})
router.get('/add-product', async (req,res)=>{

 const results = await product.find()
    .then(resu =>
    {
    console.log('data output success')
    return resu;
    
})
.catch(error=>
    {
    console.log(error);
    return error
})
console.log(results[0].productPrize)
res.render('index',{results:results})
})
// Post route to add product
router.post('/add-product',(req,res)=>{
    let message = "";
    const productpost = new product({
        productTitle: req.body.Productname,
        productPrize: req.body.ProductPrize
    })
    productpost.save()
    .then(result => {
        console.log(result);
        message = "This product was added succesfully";
        res.render('index',{message:message})

    })
    .catch(err => {
        console.log(err);
        res.send("error sending data")
        console.log(req.body.Productname,req.body.ProductPrize)

    })

})
// get all products
router.get('/products', (req,res) =>
{
const result = product.find()
.then(resu =>{
    console.log(resu)
    res.send(resu);
})
.catch(error=>{
    console.log(error);
})
})

// Remove a product based on ID
router.post('/remove', (req,res)=>{
    product.findByIdAndRemove(req.body.ID)
    .then(result => {
        console.log(result)
        res.send("Removed Succesfully");
    })
    .catch(errr => {
        console.log(errr)
        res.send('id not entered correctly')
    })
})
module.exports = router;
