import express from "express";
import { config } from "./config/env.js";
import { sequelize } from "./config/database.js";
import { studentRouter } from "./routes/studentRoute.js";  //importing studentRouter in <routes/studentRoute.js>
import { lecturerRouter } from "./routes/lecturerRoute.js";
import { adminRouter } from "./routes/adminRoute.js";


const app = express();
app.use(express.json()); //  this is a middleware to get the req.body


app.use('/', studentRouter);
app.use('/', lecturerRouter);  //is this ok please??
app.use('/', adminRouter);     //is this ok???   . nor sure as there shd be only one index page. so correct me PLEASE






sequelize.sync().then(() =>{
    console.log("Database connected!!!")
    app.listen(config.port, ()=>{
        // console.log(config.port)
        console.log("server connected!!")
    })
})