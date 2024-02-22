import express from "express";
import  cors from "cors"
import cookieParser from "cookie-parser";
const app=express();
app.use(cors(
   { origin: process.env.CORS_ORIGIN,
    credentials:true
}
))
//applying the limit for json files and adding major configuration
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static);
app.use(cookieParser());
export{app}
//generally we have a requeste and a response 