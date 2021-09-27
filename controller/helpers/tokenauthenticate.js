const product = require('../../models/product')
const jwt = require('jsonwebtoken')

const authenticateToken = async (req,res,next)=>
{
  let token = req.cookies.token
jwt.verify(token,process.env.secretkey,(err,user1)=>{
    if(err) return res.status(403).redirect('/loginregister');
    process.env.loggedin = "true"
    console.log(user1)
    console.log(process.env.loggedin)
    next();
})
}
module.exports = {authenticateToken:authenticateToken}