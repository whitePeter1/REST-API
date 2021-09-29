const jwt = require('jsonwebtoken')
const apiToken = require('../models/apiAuth')
const Str = require('@supercharge/strings')
const generateToken = async (req,res)=>{
console.log("being executed")
const token = Str.random(30);
const newapi = new apiToken({
token:token
})
await newapi.save()
.then(succ=>{console.log(succ)})
.catch(err=>{console.log(err)})
res.render('apiauth')
}
module.exports = {generateToken}