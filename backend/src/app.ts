import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Controller } from "./shared/interfaces/controller.interface";
import {errorMiddleware, errorMiddlewareUserExist} from "./shared/middleware/error.middleware";


export default class App{
    public app:express.Application;
    public port: string;

    constructor(controllers:Controller[]){
        this.app = express();
        this.port = process.env.SERVER_PORT;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(){
        this.app.use(bodyParser.json())
    }

    private initializeErrorHandling(){
        this.app.use(errorMiddleware);
        this.app.use(errorMiddlewareUserExist)
    }
    private initializeControllers(controllers:Controller[]){
        controllers.forEach((controller:Controller)=>{
            this.app.use('/',controller.router)
        })
    }

    public listen(){
        this.app.listen(process.env.SERVER_PORT, ()=>{
            console.log(`App listening on the port http://localhost:${process.env.SERVER_PORT}`);
        });
    }
}