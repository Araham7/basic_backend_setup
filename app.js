import express, { json, urlencoded } from "express";
import { connectToDb } from "./configs/Db.js";
import cors from "cors";
import { router as userRouth } from "./route/userRouts.js";

const app = express(); // Taking instance of express in app; 

// connectToDb(); // Initialiging connection to Db.

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors()) // MiddleWare to enable cross origin resource shairing .


// HOME_routh :---

app.get("/" , (req , res)=>{
    res.status(200).json({
        success: true ,
        msg: "You are on the Home Page!"
    })
})

// "/api/auth" rout handalling :---
app.use("/api/auth" , userRouth);

export { app }


