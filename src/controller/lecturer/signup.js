import { where } from "sequelize";
import { Lecturer } from "../../models/lecturer.js";

//create lecturer's account so they can sign up(register)
export const createLecturer = async(req, res)=>{

    const { firstname, lastname, email, password} = req.body;

    //finding if a student already exists 
    const lectExist = await Lecturer.findOne({where: {email: email}});

    if (lectExist){
        return res.json({
            error: "Lecturer already exists, we can't allow duplicate!!"
        })
    }
       

    const lecturer = await Lecturer.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    });

    const savedLecturer = await lecturer.save();

    return res.json({
        message: "student sucessfully created",
        data: savedLecturer
    })

}
//ending part-create lecturer account so they can sign up(register)


//searching for a lecturer
export const findLecturer = async(req, res)=>{
    const { email } = req.body;
    const findlect = await Lecturer.findOne({where: {email: email}});

        if (!findlect){
            return res.json({
                "message": "lecturer not found"
            })
            
        }
        return res.json({
            "message": "Lecturer found",
            data: findlect
        })
        
}


//ending -part -searching for a lecturer