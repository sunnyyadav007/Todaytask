const express = require("express")
const DeleteGetRoute = require("../controller/delete")
const deleteMidRoute= require('../middleware/deletemid')

const router = express.Router()

router.put("/user/delete",deleteMidRoute.DeleteMid,DeleteGetRoute.deleteControl)
module.exports = router;