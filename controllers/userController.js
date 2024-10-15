import emailValidator from 'email-validator'
import { User } from "../model/userSchema.js";

const signUp = async (req , res)=>{
    res.status(200).json({
        success : true,
        message : "you are on the signup Page!" 
    })
}

const signIn = async (req , res)=>{

    let { name , email , password , confirmPassword } = req.body;

    // Validate missing fields, return error if any field is empty:---
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false ,
            message: "Every field is required!"
        })
    }

    // Validate email :---
    if (!emailValidator.validate(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address!"
        });
    }

    if(password !== confirmPassword){
        return res.status(200).json({
            success: false ,
            message: "password and confirmPassword dosn't matched!"
        })
    }

    res.status(200).json({
        name ,
        email , 
        password ,
        confirmPassword
    })
}


const getUser = ((req , res)=>{
})

const logOut = ((req , res)=>{
})


export { signUp , signIn , getUser , logOut }