const express = require('express')
const router = express();
const path = require('path')
const product = require('../models/user')
const userController = require('../controller/user')

router.get('/',userController.userspage)
router.post('/',userController.adduser)
router.get('/:SearchQuery',userController.SearchRes)
router.get('/del/:DeleteParam',userController.Delete)

module.exports = router;