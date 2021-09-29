const express = require('express')
const user = require('./models/user')
app = express();
const productHelper = require('./controller/helpers/index')
const jwt = require("jsonwebtoken")
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')
const loginController = require('./controller/login')
const cookieParser = require('cookie-parser')
const productsRoute = require('./routes/product')
const cors = require('cors')
const {authenticateToken} = require('./controller/helpers/tokenauthenticate')
const database = require('./db')
const apiRoute = require('./routes/apiauth')
const mainRoute = require('./routes/main')
const logoutController = require('./controller/helpers/logout')
const { send, nextTick } = require('process');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.post('/loginregister',loginController.LoginSearch)
app.get('/logout',logoutController.logout)
app.set('view engine', 'ejs')
// Routes Post Middleware
app.use(cookieParser())
app.use('/', mainRoute)

app.use('/apiauth', apiRoute)
app.use('/register',(req,res)=>{
    res.render('register')
})
app.use('/products',authenticateToken, productsRoute)
app.use('/user', require('./routes/user'))
app.use('/views',express.static(path.join(__dirname,"public")))
app.listen(3000);
//----------------------------------------------------------------------------------------------//

// // Tutorial on microservices 
// https://medium.com/swlh/the-complete-microservice-tutorial-part-1-building-user-service-with-grpc-node-js-and-mongodb-73e70ed80148 


