const express = require("express")
const router = require("./Dataget")
const Regis = require('../models/scm')

const route = express.Router()


router.get("/user/list/:page",(req,res,next)=>{


const par = req.params.page
console.log(par)
const data = (par-1)*10 
console.log(data)
const dbs = Regis.find().skip(data).limit(10)

 
res.send(dbs)
})

module.exports = router;