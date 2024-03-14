const express = require("express")
const router = express.Router()
const zod = require("zod")
const {User} = require("../Mongodb")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
const {authMiddleware} = require("../Middleware")

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
            message: "Incorrect input"
        })
    }

    const findinschema =await User.findOne({
        username:req.body.username
    })

    if (findinschema){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

   const new_user = await User.create({
       username: req.body.username,
       password: req.body.password,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
   });

    const userId = new_user._id;
    const token = jwt.sign({userId:userId},JWT_SECRET)

    return res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

//----------------------------------Handle SIGNIN

const signin_zod = zod.object({
    username:zod.string().email(),
    password:zod.string()
})


router.post("/signin",async(req,res)=> {
    const request = req.body
    const valid = signin_zod.safeParse(request)
    if (!valid.success) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const userExists = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!userExists) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    if (userExists) {

    const token = jwt.sign({userId: userExists._id}, JWT_SECRET)
    return res.status(200).json({
        token: token
    })
}


})

// -------------------------------------

const updateBody_Zod = zod.object({
    password: zod.string().min(3),
    firstName: zod.string().min(3),
    lastName: zod.string(),
})


router.get("/",authMiddleware,async (req, res) => {
    const valid = updateBody_Zod.safeParse(req.body)
    if (!valid.success) {
        return res.status(411).json({
            message: "Error while updating information/Incorrect Inputs"
        })
    }

    let updated = await User.updateOne({_id: req.userId}, req.body)

    return res.status(200).json({
        message : "updated successfully"
    })
})

module.exports=router;