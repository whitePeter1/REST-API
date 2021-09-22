const jwt = require('jsonwebtoken')
const authenticateToken = (req,res,next)=>
{
    const token = req.headers['x-access-token']
  console.log(token)
if(token == null) return res.sendStatus(401)
jwt.verify(token,process.env.secretkey,(err,user1)=>{
    if(err) return res.sendStatus(403)
    req.user1 = user1
    next();
})
}
module.exports = {authenticateToken:authenticateToken}