import {NextFunction, Request, Response} from "express";
import {HttpExeption} from "../exeptions/HttpExeption";
import {UserWithThisEmailAlreadyExist} from "../exeptions/UserExist.exeption";

export const errorMiddleware = ( error:HttpExeption, req:Request, res:Response, next:NextFunction)=>{
    const status = error.status || 500;
    const message = error.message || "something went wrong";
    res.status(status).send({error:message})  
}
export const errorMiddlewareUserExist = (error:UserWithThisEmailAlreadyExist, req:Request, res:Response, next:NextFunction)=>{
        res.send({error:error.message})
}