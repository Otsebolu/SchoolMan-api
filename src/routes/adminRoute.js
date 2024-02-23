//impor from express, a router: it is a class that help us route to controller fxns
import { Router } from "express";
import { createAdmin } from "../controller/admin/signup.js"; //import createStudent fxn from controller
import { findAdmin } from "../controller/admin/signup.js"

export const adminRouter = Router(); // create an instance <studentRouter> of Router from express

adminRouter.post("/signup", createAdmin);  //path of signup form , createStudent = controller fxn
adminRouter.get("/searchadmin",findAdmin);