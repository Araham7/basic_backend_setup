import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        unique: [true, "Name must be unique!"],
        required: [true, "Name is required!"],
        minLength: [5, "Name must be of minimum 5 characters!"],
        trim: true
    },
    email: {
        type: String,
        unique: [true, "Email must be unique!"],
        trim: true,
        required: [true, "Email is required!"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true , "Password is required!"],
        minLength: [8 , "Password must be at least 8 charactor!"]
    }
},{
    timestamps: true 
});

const User = model("01_User", userSchema);

export { User }