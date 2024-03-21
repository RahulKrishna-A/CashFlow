const express = require("express")
const {authMiddleware} = require("../Middleware");
const router = express.Router()
const {Account} = require("../Mongodb")
const mongoose = require("mongoose");

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
    const session = await mongoose.startSession()
    session.startTransaction()
    const transferFrom = req.userId
    const  transferTo= req.body.to
    const transferAmount = req.body.amount

    const customerFrom = await  Account.findOne({userId:transferFrom}).session(session)
    const balanceFrom = customerFrom.balance

    if(balanceFrom<transferAmount|| !customerFrom){
        return res.status(400).json({
            message:
            "Insufficient Funds"
        })
    }

    const customerTo = await Account.findOne({userId:transferTo}).session(session)
    if(!customerTo){
        return res.status(400).json({message:"Invalid account"})
    }
    await Account.updateOne({userId:transferFrom},{$inc:{
        balance : -transferAmount
        }}).session(session)

    await Account.updateOne({userId:transferTo},{$inc:{
            balance : transferAmount
        }}).session(session)
    await session.commitTransaction()

    return res.status(200).json("Transfer successful")





})





module.exports=router