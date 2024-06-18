const { error } = require('console');
const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('mongo db is connected')
}).catch(error=>{
    console.log(error)
})
const app=express();

app.listen(3000,()=>{
    console.log('server is running at 3000 !!')
})