import { Router } from "express";
import { signUp , signIn , getUser , logOut } from "../controllers/userController.js"; // Importing controller :---
const router = Router();

router.get("/signup" , signUp);
router.get("/signin" , signIn);
router.get("/getuser" , getUser);
router.get("/logout" , logOut);







export { router };



