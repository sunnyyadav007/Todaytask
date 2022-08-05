const express = require("express")
const Midware = require('../middleware/datagetmid')

const router = express.Router()
const DataGetRoute = require("../controller/dataget")

router.get("/user/get",Midware.verifytoken,DataGetRoute.Dataget)
module.exports = router;