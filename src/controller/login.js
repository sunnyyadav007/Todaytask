require("../db/conn");
const Regis = require("../models/scm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretkey = "sunnyyadav988"



exports.loginControl = async (req, res) => {
  try {
    
    const name = req.body.username;
    const bdpassword = req.body.Password;
    const data = await Regis.findOne({ username: name });

    const compare = await bcrypt.compare(bdpassword, data.Password);
    // console.log(compare);
    if (compare) {
      try{
        const token = jwt.sign({ name:name },process.env.secretkey, {
            algorithm: "HS256",
            expiresIn: 300,
          })
          res.status(200).send("ok");
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
