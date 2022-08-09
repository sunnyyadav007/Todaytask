require("../db/conn");
const Regis = require("../models/scm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");








exports.loginControl = async (req, res) => {
  try {
    
    const name = req.body.username;
    const bdpassword = req.body.Password;
    const data = await Regis.findOne({ username: name });
    
    
const id = data.id
console.log(id)
    const compare = await bcrypt.compare(bdpassword, data.Password);
   
    if (compare) {
      
        const token = jwt.sign({id},process.env.secretkey,{
            algorithm: "HS256",
            expiresIn: '60m',
          })
          console.log("hello")

          data.access_token = token
          data.save()
 
          
          res.status(200).send(token);
          // console.log("token:", token);
          console.log(data)
          
      
    } else {
      res.status(400).send("error");
    }
  } catch (err) {
    console.log(err);
  }
};
