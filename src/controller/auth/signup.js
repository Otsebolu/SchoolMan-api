import { User } from "../../models/user.js";
import { hashpassword } from "../../utils/hash.js";

export const signup = async (req, res) =>{

    let { myfirstname, myemail, mypassword, myrole} = req.body

    const foundUser = await User.findOne({where: {email: myemail}});

    if (foundUser){
        return res.json({
            message: "user already exists!!",        
        })
    }

    const hashedpassword = await hashpassword(mypassword);

    const user = await User.create({
        firstname: myfirstname,
        email: myemail,
        password: hashedpassword,
        role: myrole
    })

    const savedUser = await user.save()

    const {firstname, email, password,role} = savedUser


    return res.json({
        message: "user sucessfully created",
        user: {
            firstname,
            email,
            role
        }
    })






}