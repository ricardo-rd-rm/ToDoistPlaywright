import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS ={
    VALID_USER:{
        USERNAME:process.env.USERNAME,
        PASSWORD:process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:process.env.INVALIDUSERNAME,
        PASSWORD:process.env.INVALIDPASSWORD
    }
    
}