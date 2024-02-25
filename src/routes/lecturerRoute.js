//impor from express, a router: it is a class that help us route to controller fxns
import { Router } from "express";
import { createLecturer} from "../controller/lecturer/signup.js"; //import createStudent fxn from controller
import { findLecturer} from "../controller/lecturer/signup.js"

export const lecturerRouter = Router(); // create an instance <studentRouter> of Router from express

// lecturerRouter.post("/signup", createLecturer);  //path of signup form , createStudent = controller fxn
lecturerRouter.get("/searchlecturer",findLecturer);