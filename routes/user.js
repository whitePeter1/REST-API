const express = require('express')
const router = express();
const path = require('path')
const product = require('../models/user')
const userController = require('../controller/user')
const {allUsers, allUsersPost,allUsersDelete,allUsersUpdate} = require('../controller/allusersjson')
const headeroptions = (req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
}
router.get('/',userController.userspage)
router.post('/',userController.adduser)
router.post('/search',userController.SearchRes)
router.get('/del/:DeleteParam',userController.Delete)
router.get('/json',allUsers)
router.post('/json',headeroptions,allUsersPost)
router.delete('/json',headeroptions,allUsersDelete)
router.put('/json',headeroptions,allUsersUpdate)

module.exports = router;


