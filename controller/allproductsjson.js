

    const product = require('../models/product')
    // allproducts 
    exports.allproducts123 = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    await product.find()
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>
        {
            res.status(400).send(err)
        console.log(err)
        })
    }
// delete 

exports.allproductsdelete = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let todel = req.body
    console.log(todel)
    await product.deleteOne(todel)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>
        {
            res.status(400).send(err)
        console.log(err)
        })
    }

    // post 

    exports.allproductspost = async (req,res)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        let todel = req.body
        console.log(todel)
        const add = new product(todel)
        add.save()
        .then(data=>{
            res.status(200).send(data)
        })
        .catch(err=>
            {
                res.status(400).send(err)
            console.log(err)
            })
        }
        exports.allproductsupdate = async (req,res)=>{
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            const id = req.query.id
            const productTitle = req.body.productTitle;
            const productPrize = req.body.productPrize;
            product.findOneAndUpdate({_id:id},{$set:{productTitle:productTitle,productPrize:productPrize}},{new:true},(err,data)=>{
                if(err) {res.status(400).send(err)}
                res.status(200).send("updated user:" + data)
            })
            }