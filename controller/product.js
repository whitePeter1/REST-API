const product = require('../models/product')
const helperProd = require('./helpers/index')

// Showing all products
const allproducts = async (req,res) =>
{
const results = await helperProd.allproducts
res.render('product',{results:results})
}

// Main Route
const mainroute = async (req,res)=>{
    
    res.json({message:'main route'})
}

// Add Product
const addProduct = async (req,res)=>{
    {
        let message = "";
        const productpost = await new product({
            productTitle: req.body.Productname,
            productPrize: req.body.ProductPrize
        })
        await productpost.save()
        .then(result => {
            console.log(result);
            message = "This product was added succesfully";
        })
        .catch(err => {
            console.log(err);
            res.send("error sending data")
            console.log(req.body.Productname,req.body.ProductPrize)
    
        })
    
    }
}

// Remove Product
const removeProduct = async (req,res)=> {
    {
       await product.findByIdAndRemove(req.body.ID)
        .then(result => {
            console.log(result)
            res.send("Removed Succesfully");
        })
        .catch(errr => {
            console.log(errr)
            res.send('id not entered correctly')
        })
    }
}
const delet = async (req,res)=>
{
await product.deleteOne({productTitle:req.params.ProductName})
        .then(data =>{
            console.log(data)
            console.log("Deleted Succesfully")
        })
        .catch(err=> {
            console.log(err)
        })
}
       
// Exporting Modules
module.exports = {delet:delet,allproducts:allproducts,mainroute:mainroute,addProduct:addProduct,removeProduct:removeProduct}