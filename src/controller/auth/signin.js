import { User } from "../../models/user.js";
import { comparePassord } from "../../utils/hash.js";
import { genToken } from "../../utils/jwt.js";


export const userLogin = async (req, res)=>{

    const { email, password} = req.body;

    const userExist = await User.findOne({email: email})

    if(!userExist){
        return res.json({'message': "you don't have an account yet!!!"})
    }

    const isMatch = comparePassord(password, userExist.password)

    if (!isMatch){
        return res.json({"message": "INVALID CREDENTIALS!!"})
    }

    // Generate access token: is generated for each login user to identiy them and give them permission

    const token = await genToken({email: email, role: userExist.role})

    console.log(token)

    return res.json({
        'message': "user successfully loggined",
        accessToken: token,
        "user": userExist
    })

    


}