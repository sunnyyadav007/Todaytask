const datamidware = require('../middleware/datagetmid')
const Regis = require("../models/scm");



exports.Dataget = async (req,res)=>{
 const data = await Regis.findOne({id:req.verify.id})
   if(data){
    console.log(data)
    res.status(200).send("ok")
   }else{
    res.status(400).send("error")
   }
 

}
