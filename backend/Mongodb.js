const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://rahulkrish321123:JHra0EQk0rR1ID2p@cashfree.uhuvrek.mongodb.net/`)


const userSchema = mongoose.Schema({
    username: {
        type:String,
        minLength:3,
        maxLength:30,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:3,
        maxLength:15,
        trim:true,
        required:true,

    },
    firstName:{
        type:String,
        trim:true,
        required:true,
        minLength:2,
        maxLength:30

    },
    lastName:{
        type:String,
        trim:true,
        required:true,
        maxLength:30

    },
})


const user = mongoose.model("user",userSchema)

module.exports={
    user
}