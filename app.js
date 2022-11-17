const { MongoClient } = require('mongodb');
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Assignment-2")
const User = require("./modules/user")

const app = express();
app.use(bodyParser.json());

app.get("/user", async (req,res)=>{
    try{
const user =  await User.find();
res.status(200).json({
    status:"sucess",
    data:user
})
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })

    }
   
})

app.post("/register", async (req,res)=>{
    

    try{
        const user = await User.create(req.body)
        res.status(200).json({
            status:"sucess",
            data:user
        })
    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})
app.post("/login", async (req,res)=>{
    

    try{
        const user = await User.create(req.body)
        res.status(200).json({
            status:"sucess",
            data:user
        })
    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})
app.post("/posts", async (req,res)=>{
    

    try{
        const user = await User.create(req.body)
        res.status(200).json({
            status:"sucess",
            data:user
        })
    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.put("/posts/:id", async(req,res)=>{
    try{
        const user = await User.updateOne({__id:req.params.id},req.body);
        res.status(200).json({
            status:"Sucess",
            data:user
        })

    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.delete("/posts/:id", async (req,res)=>{
    try{
       const user  =  await User.deleteOne({__id:req.params.id},req.body);
       res.status(200).json({
        status:"Sucess",
        user
       })
    }catch(e){
        res.status(500).json({
            status:"failed",
           message:e.message
           })
    }
})

app.listen(3000,()=>{
    console.log("server is running...")
})