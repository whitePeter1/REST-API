const user = require('../models/user')
let message = "";
const userspage = (req,res)=>
{
    res.render('user',{message:message})
}
// Adding a user
const adduser = async (req,res,next) =>{ 

const newuser = await new user({
    Username:req.body.Username,
    FullName:req.body.FullName,
    Address:req.body.Address,
    zip:req.body.zip,
    Country:req.body.Country,
    Password:req.body.Password
})
await newuser.save()
.then(resu=> {

    if(req.body.submit){ 
    message = "posted succesfully"
    res.render('../views/user',{message:message})
    message = " ";
    }
    else
    {
        message=" ";
    }
})
.catch(err => console.log(err))
}
message = ""
// Searching based on username
// Async

const SearchRes = async (req,res)=>
{
    await user.find({Username:req.params.SearchQuery})
     .then(data => {
         if(data.length > 0){
             if(data){
                console.log(data)
                res.send(data);
             }
         }
console.log(' no results')
     })
     .catch(err=>console.log(err))
}

// Deleting a user based on username
const Delete = (req,res,next)=>{
    var va12 = `"`+req.params.DeleteParam+`"`
    user.findOneAndDelete({Username:va12})
    .then(resu =>{
        if(!resu){
            console.log('error deleting user...')
            res.send('error deleting user')
        }
        else{
        console.log("User deleted succesfully")
 res.send(`User ${req.params.DeleteParam} has been deleted successfully.`) 
        }  
})
    
    .catch(err => console.log(err))
}
module.exports = {adduser:adduser,SearchRes:SearchRes,Delete:Delete,userspage:userspage};