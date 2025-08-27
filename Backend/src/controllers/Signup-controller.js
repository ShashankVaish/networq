import e from "express";
import { ApiError,ApiResponse } from "../utils";


import bcrypt from "bcryptjs";



// make a signup controller
const signup = (req, res) => {
    try{
        const { username, email,password} = req.body;
        if(!username || !email || !password){
            throw new ApiError('All fields are required',400);
        }
        
        if(password.length < 6){
            throw new ApiError('Password must be at least 6 characters',400);   
        }

        if(!email.includes('@')){
            throw new ApiError('Invalid email address',400);   
        }
        const salt = bcrypt.genSaltSync(10);
        
        const hashedPassword = bcrypt.hashSync(password, salt);
        

        
        const user = { timestamp: Date.now(), username, email, password: hashedPassword };   
        return res.status(201).json(new ApiResponse(201,user,'User created successfully'));

    }
    catch(error){
        if(error instanceof ApiError){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: {
                    message: error.message,
                    statusCode: error.statusCode
                },
                data: {}
            });
        }
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: {
                message: error.message,
                statusCode: 500
            },
            data: {}
        });
    }}

export { signup };