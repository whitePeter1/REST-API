const user = require('../models/user')
const jwt = require('jsonwebtoken');
const { cookie } = require('request');
const LoginSearch = async (req,res)=>
{
    if(process.env.loggedin === true){
        return res.redirect("products")
    }
    const username = req.body.Username;
    const password = req.body.Password;
    await user.find({Username:username,Password:password})
     .then(data => {
         if(data.length > 0){
             if(data){
                 console.log(data)
                data = JSON.stringify(data);
                 jwt.sign(data,process.env.secretkey,(err,token)=>{
                    if(err)
                    console.log(err);
                    else{
                        res.cookie('token',token)
                        process.env.loggedin == true;
                        console.log(process.env.loggedin)
                        res.redirect("products")
                    }
                    
             })
            }

        }
             else
             {
                 res.send('Problem logging in')
             }
            }) 
     .catch(err=>console.log(err))
        }
module.exports = {LoginSearch:LoginSearch}