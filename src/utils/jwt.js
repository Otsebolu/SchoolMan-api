import jwt from   "jsonwebtoken";
import { config } from "../config/env.js";


export const genToken = async(payload) =>{

    return jwt.sign(payload, config.secretkey, {expiresIn: '1h'})
}

//to the decode the token
export const decodeToken = async (token) =>{
    // return jwt.decode(token)

    const decoded = jwt.verify(token, config.secretkey)

    return decoded
}