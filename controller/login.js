const user = require('../models/user')
const jwt = require('jsonwebtoken')
const LoginSearch = async (req,res)=>
{
    let user1;
    const username = req.body.Username;
    const password = req.body.Password;
    await user.find({Username:username,Password:password})
     .then(data => {
         if(data.length > 0){
             if(data){
                user1 = data
                res.redirect('/products')
             }
             else
             {
                 res.send('Problem logging in')
             }
         }
     })
     .catch(err=>console.log(err))
     user1 = JSON.stringify(user1)
     console.log(typeof user1)
      jwt.sign(user1,process.env.secretkey,(err,token)=>{
        if(err)
        console.log(err);
        else
        console.log(token)
       return res.json(token)
    })
}
module.exports = {LoginSearch:LoginSearch}

// https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens