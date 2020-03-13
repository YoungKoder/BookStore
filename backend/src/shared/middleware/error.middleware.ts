import {NextFunction, Request, Response} from "express";
import {HttpExeption} from "../exeptions/HttpExeption";

export const errorMiddleware = (error:HttpExeption, 
    req:Request, 
    res:Response, 
    next:NextFunction):void=>{
        const status = error.status || 500;
        const message = error.message || "something went wrong";
    res
    .status(status)
    .send({
        status,
        message
    })  
}
