const user = require('../models/user')
const LoginSearch = async (req,res,user1)=>
{
    const username = req.body.Username;
    const password = req.body.Password;
    user1 = await user.find({Username:username,Password:password})
     .then(data => {
         if(data.length > 0){
             if(data){
                console.log(data)
                res.redirect('/products')
             }
             else
             {
                 res.send('Problem logging in')
             }
         }
     })
     .catch(err=>console.log(err))
}
module.exports = {LoginSearch:LoginSearch}