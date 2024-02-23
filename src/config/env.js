import dotenv from 'dotenv'

dotenv.config()




export const config = {
    port: process.env.port,
    dbname: process.env.dbname,
    dbpassword: process.env.dbpassword,
    dbusername: process.env.dbusername
}