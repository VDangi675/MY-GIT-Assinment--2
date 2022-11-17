const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    name:{type:String},
    email:{type:String},
    password:{type:String},
    title:{type:String},
    body:{type:String},
    image:{
        type: String,
        required:true
    }
})

const usermodel = mongoose.model("usermodel",userSchema)

module.exports = usermodel;