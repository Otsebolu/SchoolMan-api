import bcrypt from "bcrypt";

export const hashpassword = async (password) =>{
    const hashedpassword = await bcrypt.hash(password, 10)
    return hashedpassword;
}

