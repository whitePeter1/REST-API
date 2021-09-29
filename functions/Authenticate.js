exports = function(arg){
user.find()
.then(data=>{
  console.log(data)
})
.catch(err=>{
  console.log(err)
})
};