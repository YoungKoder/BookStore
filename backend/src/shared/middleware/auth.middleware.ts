import { NextFunction, Response, Request } from 'express';
import jwt from "jsonwebtoken";
import { DataStoredInToken } from '../interfaces/token.interface';
import userModel from '../../dataAccess/entityModels/user.model';

export const authMiddleware = async(req:Request,res:Response, next:NextFunction)=>{
    const header = req.headers['authorization'];
    if(header){
        const bearer = header.split(" ");
        const token = bearer[1];
        const secret = process.env.JWT_SECRET;
        try{
            const verificationResponse = jwt.verify(token,secret) as DataStoredInToken;

            const id = verificationResponse.userId;
            const userEntity = await userModel.findById(id);
            if(userEntity){
                next();
            }else{
                res.send(403);
            }
        }catch{
            res.send(403);
        }
    }else{
        res.status(403);
    }
}