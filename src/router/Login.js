const express = require('express')
const router = express.Router()
const LoginRoute = require("../controller/login")

router.use(express.json());

router.post('/user/login',LoginRoute.loginControl)



module.exports = router;