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
    // console.log(compare);
    if (compare) {
      try{
        const token = jwt.sign({id},process.env.secretkey,{
            algorithm: "HS256",
            expiresIn: '30m',
          })
          res.status(200).send(token);
          console.log("token:", token);
      }catch{
        res.status(500).send("error")
      }
      
    } else {
      res.status(400).send("error");
    }
  } catch (err) {
    console.log(err);
  }
};
