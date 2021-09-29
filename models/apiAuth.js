const mongoose = require('mongoose')

const schema = mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})

const apiAuth = mongoose.model('token', schema)

module.exports = apiAuth; 