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
    const transferFrom = req.userId
    const  transferTo= req.body.to
    const transferAmount = req.body.amount

    const customerFrom = await  Account.findOne({userId:transferFrom})
    const balanceFrom = customerFrom.balance

    if(balanceFrom<transferAmount){
        return res.status(400).json({
            message:
            "Insufficient Funds"
        })
    }

    const customerTo = await Account.findOne({userId:transferTo})
    if(!customerTo){
        return res.status(400).json({message:"Invalid account"})
    }
    await Account.updateOne({userID:transferFrom},{$inc:{
        balance : -transferAmount
        }})

    await Account.updateOne({userID:transferTo},{$inc:{
            balance : transferAmount
        }})

    return res.status(200).json("Transfer successful")





})





module.exports=router