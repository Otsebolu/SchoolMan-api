import { where } from "sequelize";
import { Admin } from "../../models/admin.js";

//create admin account so they can sign up(register)
export const createAdmin = async(req, res)=>{

    const { firstname, lastname, email, password} = req.body;

    //finding if a student already exists 
    const adminExist = await Admin.findOne({where: {email: email}});

    if (adminExist){
        return res.json({
            error: "Admin already exists, we can't allow duplicate!!"
        })
    }
       

    const admin= await Admin.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    });

    const savedAdmin = await admin.save();

    return res.json({
        message: "admin sucessfully created",
        data: savedAdmin
    })

}
//ending part-create admin account so they can sign up(register)


//searching for an admin
export const findAdmin = async(req, res)=>{
    const { email } = req.body;
    const findadm = await Admin.findOne({where: {email: email}});

        if (!findadm){
            return res.json({
                "message": "admin not found"
            })
            
        }
        return res.json({
            "message": "admin found",
            data: findadm
        })
        
}

//ending -part-searching for an admin 