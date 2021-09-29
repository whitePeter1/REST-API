const apiAuth = require('../../models/apiAuth')
const jwt = require('jsonwebtoken')


const authenticateapi = async (req,res,next)=>{
    const apikey = req.query.api
        if(await apiAuth.findOne({token:apikey})){
            next()
        }
        else
        {
            res.json({message:"Token not working or not found in our database"})
        }
        
    }
module.exports = {authenticateapi}