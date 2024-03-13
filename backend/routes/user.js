const express = require("express")
const router = express.Router()
const zod = require("zod")
const {User} = require("../Mongodb")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")


const signupBody = zod.object({
    username: zod.string().email(),
    firstName:zod.string().min(3),
    lastName:zod.string(),
    password:zod.string().min(3)

})

router.post("/signup",async (req,res)=>{
        const valid = signupBody.safeParse(req.body)
    // res.send(valid)
    if(!valid){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const findinschema =await User.findOne({
        username:req.body.username
    })

    if (findinschema){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

   const new_user = await User.create({
       username: req.body.username,
       password: req.body.password,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
   });

    const id = new_user._id;
    const token = jwt.sign(id,JWT_SECRET)

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})







module.exports=router;