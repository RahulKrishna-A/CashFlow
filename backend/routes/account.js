const express = require("express")
const {authMiddleware} = require("../Middleware");
const router = express.Router()
const {Account} = require("../Mongodb")

// const transferfunds()

 router.get("/balance",authMiddleware , async (req,res)=>{
    const account = await Account.findOne({
        userId:req.userId
    })

    return res.status(200).json({
        balance : account.balance
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{

})





module.exports=router