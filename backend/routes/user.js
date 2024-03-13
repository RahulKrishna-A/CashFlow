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

// -----------------Handle SIGNUP

router.post("/signup",async (req,res)=>{
        const valid = signupBody.safeParse(req.body)
    // console.log(JWT_SECRET)
    // res.send({a:"hi"})
    // console.log("1")
    if(!valid.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect input"
        })
    }

    const findinschema =await User.findOne({
        username:req.body.username
    })

    if (findinschema){
        return res.status(411).json({
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
    const token = jwt.sign({id},JWT_SECRET)

    return res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

//----------------------------------Handle SIGNIN




module.exports=router;