
import { NextFunction, Response, Request} from 'express';
import { getTokenFromHeader } from "../../utils/getTokenFromHeader.utils";
import { getUserFromToken } from "../../utils/getUserFromToken.utils";
import { Role } from "../enums/role.enum";
import { requestWithUser } from '../interfaces/requestWithUser.interface';

export const checkRoleMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    const header = req.headers['authorization'];
    const token = await getTokenFromHeader(header);
    const userEntity = await getUserFromToken(token);
    const role = userEntity.role;
    if(role == Role.User){
        res.status(403).send({error:"You don't have permission"});
    } 
    next();
}