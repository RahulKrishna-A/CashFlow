const mongoose = require("mongoose");

const {MONGO_URI} = require("./config")

async function connectToDB() {
try {
    await mongoose.connect(MONGO_URI)
    await console.log("Connected to DB")
}
catch (err){
    console.log("error connecting to DB")
}
}


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:3,

        required:true,

    },
    firstName:{
        type:String,
        trim:true,
        required:true,
        minLength:2,


    },
    lastName:{
        type:String,
        trim:true,
        required:true,


    },
})


const Account_schema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    balance:{
        type:Number,
        required:true
    }
})







const User = mongoose.model("User",userSchema)
const Account = mongoose.model("Account",Account_schema)

module.exports={
    User,
    Account,
    connectToDB
}