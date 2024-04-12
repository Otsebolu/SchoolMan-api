import bcrypt from "bcrypt";

export const hashpassword = async (password) =>{
    const hashedpassword = await bcrypt.hash(password, 10)
    return hashedpassword;
}

export const comparePassord = async (password, dbPassord) => {
    return bcrypt.compare(password, dbPassord)
}

