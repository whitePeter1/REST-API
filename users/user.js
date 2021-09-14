

app.get('user',(req,res)=>{
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
})
// const uID = 'gbdfgbfdhnfhjngfchj'
// const result = user.find({Username:uID})
// .then(res => {
//     const tempobj = res[0];
//     console.log(tempobj._id)
//     user.findByIdAndRemove(tempobj._id)
//     .then(sic =>console.log(sic))
//     .catch(er=>console.log(er))
//     console.log(tempobj.FullName)
// })