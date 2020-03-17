import { NextFunction, Response, request } from 'express';
import { RequestWithUser } from "../interfaces/requestWithUser.interface";
import jwt from "jsonwebtoken";
import { DataStoredInToken } from '../interfaces/token.interface';
import userModel from '../../dataAccess/entityModels/user.model';
import { WrongCredentialsException } from '../exeptions/WrongCredentials.exeption';
import { WrongAuthenticationTokenException } from '../exeptions/WrongAuthenticationToken';

const authMiddleware = async(req: RequestWithUser, res:Response, next:NextFunction )=>{
    const cookies = request.cookies;
    if(cookies && cookies.Authorization){
        const secret = process.env.JWT_SECRET;
        try{
            const verificationResponse = jwt.verify(cookies.Authorization,secret) as DataStoredInToken;

            const id = verificationResponse.userId;
            const user = await userModel.findById(id);
            console.log(req.user);
            if(user){
                req.user = user;
                next();
            }else{
                next(new WrongAuthenticationTokenException());
            }
        }catch{
            next(new WrongAuthenticationTokenException());
        }
    }else{
        next(new WrongCredentialsException())
    }
}