const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://rahulkrish321123:JHra0EQk0rR1ID2p@cashfree.uhuvrek.mongodb.net/`)


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


const User = mongoose.model("User",userSchema)

module.exports={
    User
}