import { where } from "sequelize";
import { Student } from "../../models/student.js";

//create students account so they can sign up(register)
export const createStudent = async(req, res)=>{

    const { firstname, email, password} = req.body;

    //finding if a student already exists 
    const userExist = await Student.findOne({where: {email: email}});

    if (userExist){
        return res.json({
            error: "Student already exists, we can't allow duplicate!!"
        })
    }
       

    const student = await Student.create({
        firstname: firstname,
        email: email,
        password: password
    });
    
    const savedStudent = await student.save();  

    return res.json({
        message: "student sucessfully created",
        data: savedStudent
    })

}
//ending part-create students account so they can sign up(register)


//searching for a student 
export const findStudent = async(req, res)=>{
    const { email } = req.body;
    const findstd = await Student.findOne({where: {email: email}});

        if (!findstd){
            return res.json({
                "message": "student not found"
            })
            
        }
        return res.json({
            "message": "student found",
            data: findstd
        })
        
}


//ending -part -searching for a student 