import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Router/Routes.js';
import db from './Database/db.js';


const app=express();

dotenv.config();        /* To get sensitive info */

app.use(cors({
    origin:`${process.env.FRONT_URL}` , // Allow only specific origins
    methods: ['GET','POST','DELETE','PATCH'],
    credentials: true,
}))

db();
app.use(express.json());
app.use(router);



const port=process.env.PORT||8080
app.listen(port,(req,res)=>{
    console.log(`Server is starting ${port}`)
})