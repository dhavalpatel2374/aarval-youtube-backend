//require ('dotenv').config({path:'/.env'})
import dotenv from "dotenv"; // here we have used Import to maintain code consistancy 
import connectDB from "./db/index.js";

dotenv.config({
    path:'/.env'
})

connectDB();










/*import { express } from "express";
const app = express()

//IIFE -  Immediately-Invoked Function Expression
( async()=>{
    try {
        const connectDB = await mangoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log('error',error);
            throw error;
        })

        app.listen(process.env.PORT,(port)=>{
            console.log(`Application is running on ${process.env.PORT}`);
        })
    } catch (error) {
        console.log('Error',error);            
    }
} )()*/
