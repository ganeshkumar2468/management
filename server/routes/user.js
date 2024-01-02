const express = require("express")
const router = express()
const userController= require("../controllers/userControllers")



router.get("",userController.view)

router.post("",userController.find)

router.get("/adduser",userController.insert)

router.post("/adduser",userController.insertuser)

module.exports = router