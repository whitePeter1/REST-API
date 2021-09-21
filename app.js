const express = require('express')
const user = require('./models/user')
app = express();
const productHelper = require('./controller/helpers/index')
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')
const productsRoute = require('./routes/product')
const cors = require('cors')
const database = require('./db')
const mainRoute = require('./routes/main')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Register view engnie
app.set('view engine', 'ejs')
// Routes Post Middleware

app.use('/', mainRoute)
app.use('/products', productsRoute)
app.use('/user', require('./routes/user'))
app.use('/views',express.static(path.join(__dirname,"public")))
app.listen(3000);

