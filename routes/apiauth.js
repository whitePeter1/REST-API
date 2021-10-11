const express = require('express')
const router = express();
const path = require('path')
const jwt = require('jsonwebtoken')
const apiToken = require('../models/apiAuth')
const {authenticateapi} = require('../controller/helpers/apiauthenticate')
const {generateToken} = require('../controller/generateToken')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
router.get('/api123',(req,res)=>{
    fetch("https://pensure-dev.azurewebsites.net/api/Partner/SalesSupport/Employer/Init",{
        "Content-Type": "application/json",
        "method": "GET"
    })
    .then(data =>{
        res.send(data)
    })
    .catch(err=>{console.log(err)})
})
router.get('/protected',authenticateapi,(req,res)=>{
    const test = req.query.api2
console.log(test)
res.json({message:"PROTECTED PATH Access Successfully"})
})
// router.get('/protected',(req,res)=>{
//     res.send("test")
// })
router.get('/',(req,res)=>{
res.render('apiauth')
})
router.post('/',generateToken)
module.exports = router