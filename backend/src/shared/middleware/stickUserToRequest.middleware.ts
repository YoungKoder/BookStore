import { requestWithUser } from "../interfaces/requestWithUser.interface";
import { NextFunction, Response, Request} from 'express';
import { getUserFromToken } from "../../utils/getUserFromToken.utils";
import { getTokenFromHeader } from "../../utils/getTokenFromHeader.utils";

export const stickUserToRequestMiddleware = async(req:requestWithUser, res:Response, next:NextFunction)=>{
    const header = req.headers['authorization'];
    const token = await getTokenFromHeader(header);
    const userEntity = await getUserFromToken(token);
    req.user = userEntity;
    next();
}