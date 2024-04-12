import { Router } from "express";
import { signup } from "../controller/auth/signup.js";
import { userLogin } from "../controller/auth/signin.js";

export const userRouter = Router(); // create an instance <userRouter> of Router from express

userRouter.post("/signup",  signup);  //path of signup form , createuser = controller fxn
userRouter.post("/signin",userLogin);