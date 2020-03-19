import express from "express";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import { Controller } from "./shared/interfaces/controller.interface";
import {errorMiddleware} from "./shared/middleware/error.middleware";
import pino from "pino";
import expressPino from "express-pino-logger";
import { expressLogger } from "./shared/services/logger.service";

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
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(expressLogger);
    }

    private initializeErrorHandling(){
        this.app.use(errorMiddleware);
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