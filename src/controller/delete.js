const Regis = require("../models/scm")
exports.deleteControl = async(req,res)=>{
    console.log(req.verify.id)
    const data  = await Regis.deleteOne({id:req.verify.id})
    res.send(req.verify)
    }