const express = require('express')
const router = express();
const path = require('path')
const product = require('../models/user')
const userController = require('../controller/user')
const {allUsers, allUsersPost,allUsersDelete,allUsersUpdate} = require('../controller/allusersjson')
router.get('/',userController.userspage)
router.post('/',userController.adduser)
router.post('/search',userController.SearchRes)
router.get('/del/:DeleteParam',userController.Delete)
router.get('/json',allUsers)
router.post('/json',allUsersPost)
router.delete('/json',allUsersDelete)
router.put('/json',allUsersUpdate)

module.exports = router;