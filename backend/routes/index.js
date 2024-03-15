const express = require('express')
const user_router = require("./user")
const router = express.Router()
const account_router = require("./account")

router.use("/user",user_router)

router.use("/account",account_router)

module.exports = router;

