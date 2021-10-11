const user = require('../models/user')
exports.allUsers = async (req, res, next) => {
    await user.find()
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(400).send(error)
        })
    next();
}

exports.allUsersPost = async (req, res, next) => {
    const userInfo = req.body
    const newUser = new user(userInfo)
    newUser.save()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.allUsersDelete = async (req, res, next) => {
    const userInfo = req.body
    await user.deleteOne(userInfo)
        .then(resul => {
            res.status(200).send("Deleted Successfully"+ resul)
        })
        .catch(err => {
            res.status(400).send("Bad Request" + err)
        })
    }
        exports.allUsersUpdate = async (req, res, next) => {
            const userInfo = req.body
            const id = req.query.id
            await user.findOneAndUpdate({_id:id},{$set: {
                Username:req.body.Username,
                FullName:req.body.FullName,
                Address:req.body.Address,
                zip:req.body.zip,
                Country:req.body.Country,
                Password:req.body.Password,
                role:req.body.role

            }})
                .then(resul => {
                    res.status(200).send("Changed Succesfully"+ resul)
                })
                .catch(err => {
                    res.status(400).send("Bad Request" + err)
                })
            }
