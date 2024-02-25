//impor from express, a router: it is a class that help us route to controller fxns
import { Router } from "express";
import { createStudent } from "../controller/student/signup.js"; //import createStudent fxn from controller
import { findStudent} from "../controller/student/signup.js"
import { signup } from "../controller/auth/signup.js";

export const studentRouter = Router(); // create an instance <studentRouter> of Router from express

studentRouter.post("/signup",  signup);  //path of signup form , createStudent = controller fxn
studentRouter.get("/searchstudent",findStudent);
