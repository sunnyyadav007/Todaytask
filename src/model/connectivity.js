const connectivity = require('mongoose')
 connectivity.connect("mongodb://localhost:27017/prodatabase").then(()=>{console.log("connected succesfully")}).catch(()=>{console.log("err")})

 module.exports = connectivity