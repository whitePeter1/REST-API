const express = require('express')
const router = express();
const path = require('path')
const jwt = require('jsonwebtoken')
const apiToken = require('../models/apiAuth')
const {authenticateapi} = require('../controller/helpers/apiauthenticate')
const {generateToken} = require('../controller/generateToken')
router.get('/protected',authenticateapi,(req,res)=>{
    res.json({message:"Welcome to API KEY  protected path "})
})
// router.get('/protected',(req,res)=>{
//     res.send("test")
// })
router.get('/',(req,res)=>{
res.render('apiauth')
})
router.post('/token',generateToken)
module.exports = router