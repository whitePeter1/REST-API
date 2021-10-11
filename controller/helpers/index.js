const product = require('../../models/product')
const user = require('../../models/user')
const allproducts1 =
product.find()
.then(resu =>
{
return resu;

})
.catch(error=>
{
console.log(error);
return error;
})
const allusers = async(req,res)=>{
await user.find()
  .then(data=>{
      return data
  })
  .catch(err =>{
      return err
  })
}
module.exports = {allproducts1,allusers};