const express = require('express')
const router = express();
const mainController = require('../controller/mainController')
router.get('/',mainController.allproducts)
router.get('/loginregister',(req,res)=>{
    res.render('loginregister')
})
module.exports = router;