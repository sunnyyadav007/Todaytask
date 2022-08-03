const express = require('express')
 const router = express.Router()
 const RegisterControllerGet = require('../controller/control')
 router.use(express.json());

 router.post("/register",RegisterControllerGet.registercontrol)

 module.exports = router;