const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://res.cloudinary.com/imagedata1/image/upload/v1596901459/nt0doptn8txnixnqdcs3.jpg"
    },
    followers:[{type:String,ref:"User"}],
    following:[{type:String,ref:"User"}]
})

mongoose.model("User",userSchema)