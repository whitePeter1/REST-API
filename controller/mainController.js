const {allproducts1} = require('./helpers/index')
const allproducts = async (req,res)=>
{
    const producRes = await allproducts1
    res.render('index',{producRes})
}
const loginregister = (req,res)=>{
    res.render('loginregister')
}
module.exports = {allproducts:allproducts,loginregister:loginregister};