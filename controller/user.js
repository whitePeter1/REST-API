const user = require('../models/user')
const mongoose = require('mongoose')
const express = require('express')
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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
    message="user added succesfully"
})
.catch(err => console.log(err))
}

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