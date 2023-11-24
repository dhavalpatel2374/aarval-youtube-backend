import { DB_NAME } from "../constant.js";
import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected ! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB Connection Error',error);
        process.exit(1);
    }
}

export default connectDB;