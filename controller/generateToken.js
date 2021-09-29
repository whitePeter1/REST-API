const jwt = require('jsonwebtoken')
const apiToken = require('../models/apiAuth')
const generateToken = (req,res)=>{
console.log("being executed")
jwt.sign("TestUser","TestKey", async (err,token)=>{
    if(err)
    {console.log(err)}
    else{
const newapi = new apiToken({
token:token
})
await newapi.save()
.then(succ=>{console.log(succ)})
.catch(err=>{console.log(err)})
    }
})
res.render('apiauth')
}
module.exports = {generateToken}