require("../db/conn");
const Regis = require("../models/scm")
const bcrypt = require("bcrypt")


exports.loginControl = async (req,res)=>{
    
    
try{
    const data = await Regis.findOne({username: req.body.username}) 
    
    const bdpassword = req.body.Password;
   const compare  = await bcrypt.compare(bdpassword,data.Password) 
   console.log(compare)
   if(compare){
    res.status(200).send("ok")
   }else{
    res.status(400).send("error")
   }

    

}
catch{
    res.status(400).send("error")
}
    
    
   

}