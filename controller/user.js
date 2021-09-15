const user = require('../models/user')

// Adding a user
const adduser = (req,res,next) =>{ 

const newuser = new user({
    Username:req.query.Username,
    FullName:req.query.FullName,
    Address:req.query.Address,
    zip:req.query.zip,
    Country:req.query.Country,
    Password:req.query.Password
})
newuser.save()
.then(resu=> {
    res.send('Added succesfully')

})
.catch(err => console.log(err))
}

// Searching based on username
const Search = (req,res,next)=>{
const usernameS = req.params.SearchQuery;
console.log(req.params.SearchQuery)
user.find({Username:usernameS})
.then(resu => {
    let tempobj = resu[0]
    console.log(tempobj)
    res.send(tempobj)
})
.catch(err=>
    {
        console.log(err)
    })
}

// Deleting a user based on username
const Delete = (req,res,next)=>{
    const test =  user.find(req.params.DeleteParam)
    .then(find => test = find)
    console.log(test)
    if(!test){
        console.log('err')
}
else
{
     user.findOneAndDelete({Username:req.params.DeleteParam})
    .then(resu =>{console.log("User deleted succesfully")
 res.send(`User ${req.params.DeleteParam} has been deleted successfully.`)   
})
    .catch(err => console.log(err))

}
}
module.exports = {adduser:adduser,Search:Search,Delete:Delete};