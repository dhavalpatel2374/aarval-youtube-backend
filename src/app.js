import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//to set the origin URL
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//to limit size of json
app.use(express.json({limit:"16KB",}))
//encode the URL and set Limit
app.use(express.urlencoded({extended:true,limit:"16kb"}))
//set the public path
app.use(express.static("public"))
//set cookie parser
app.use(cookieParser())


export {app}