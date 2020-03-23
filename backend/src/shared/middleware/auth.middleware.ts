import { NextFunction, Response, Request } from 'express';
import jwt from "jsonwebtoken";
import { DataStoredInToken } from '../interfaces/token.interface';
import userModel from '../../dataAccess/entityModels/user.model';
import { getTokenFromHeader } from '../../utils/getTokenFromHeader.utils';
import { getUserFromToken } from '../../utils/getUserFromToken.utils';

export const authMiddleware = async(req:Request,res:Response, next:NextFunction)=>{
    const header = req.headers['authorization'];
    if(header){
        const token = await getTokenFromHeader(header);
        try{
            const userEntity = await getUserFromToken(token);
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