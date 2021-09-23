const jwt = require('jsonwebtoken')
const authenticateToken = async (req,res,next)=>
{
  let token = req.cookies.token
jwt.verify(token,process.env.secretkey,(err,user1)=>{
    if(err) return res.sendStatus(403)
    next();
})
}
module.exports = {authenticateToken:authenticateToken}