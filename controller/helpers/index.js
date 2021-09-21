const product = require('../../models/product')
const allproducts = product.find()
.then(resu =>
{
console.log(resu)
return resu;

})
.catch(error=>
{
console.log(error);
return error
})

module.exports = {allproducts:allproducts};