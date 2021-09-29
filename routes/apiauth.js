const express = require('express')
const router = express();
const path = require('path')
const jwt = require('jsonwebtoken')
const apiToken = require('../models/apiAuth')
const {authenticateapi} = require('../controller/helpers/apiauthenticate')
const {generateToken} = require('../controller/generateToken')
router.get('/protected',authenticateapi,(req,res)=>{
    const test = req.query.api2
console.log(test)
res.json({message:"PROTECTED PATH"})
})
// router.get('/protected',(req,res)=>{
//     res.send("test")
// })
router.get('/',(req,res)=>{
res.render('apiauth')
})
router.post('/token',generateToken)
module.exports = router