const jwt= require("jsonwebtoken")

exports.DeleteMid = async (req,res,next)=>{
if(!req.headers || !req.headers.authorization)
    return next("token is required")
    const accesstokken = req.headers.authorization
  const tokken = await accesstokken.split("Bearer ")[1]
if(!tokken) return next("token is required")

try{
    const verify = await jwt.verify(tokken,process.env.secretkey);
    req.verify = verify
    next()
}
catch(e){
    res.status(500).json({error:"token expire or invalid"})
}
 



}