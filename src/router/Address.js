const express = require("express")
const Addrs = require("../models/scm")
const Adressschema = require("../models/scm")


const router = express.Router()

router.post("/user/address",async (req,res,next)=>{
    // const {user_id,city,state,pin_code,phoneo}=req.body
const data = await new Addrs({
   
    City : req.body.city,
    State : req.body.state,
    PinCode : req.body.pin_code,
    PhoneNo : req.body.phoneNo,

});
const data2 =  await new Adressschema({
    houseNo:req.body.address.houseno,
    street:req.body.address.street,
    city:req.body.address.city,
})
console.log(data.PinCode)
await data.save()
await data2.save()
 const populatedata =  await Addrs.find({user_id:req.body.user_id}).populate('data2')

 res.send("ok")





    
 

})
module.exports = router
