const { createUser, getAllUsers, getUsersByUserId, updateUser , deleteUsers, login }  = require("./user.controller");

const {checkToken } = require("../../auth/token_validation") 

const { addUserValidation} = require("../../validation/users/user.validation")

const router = require("express").Router();

router.post("/",checkToken, createUser)

router.post("/",checkToken,addUserValidation, createUser)

router.get("/",checkToken, getAllUsers)

router.get("/:id",checkToken, getUsersByUserId)

router.patch("/",checkToken, updateUser)

router.delete("/",checkToken, deleteUsers)

router.post("/login",login)

module.exports = router;