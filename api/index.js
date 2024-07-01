import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from  './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js'
import commetRoutes from './routes/comment.route.js'
import path from 'path'


const app=express();
app.use(express.json())
app.use(cookieParser());
dotenv.config()


mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('MONGO DB IS CONNECTED')
}).catch(error=>{
    console.log(error)
})
const __dirname=path.resolve();


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/post',postRoutes)
app.use('/api/comment',commetRoutes)

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server erros';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
