import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import userModel from "../../dataAccess/entityModels/user.model";
import {doesUserAlreadyExist, addUser } from "../../shared/services/registration.service";
import { User } from '../../shared/interfaces/entityInnerfaces/user.interface';
import {UserWithThisEmailAlreadyExist} from "../../shared/exeptions/UserExist.exeption";

export class AuthController implements Controller{
    public path = '/auth';
    public router = express.Router();
    private user = userModel;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/register`, this.registration);
        // this.router.post(`${this.path}/loginIn`, this.loginIn);
    }

    private registration = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const userData:User = req.body;

        let doesUserExist = await doesUserAlreadyExist(userData);
        if(doesUserExist){ 
            const err = new UserWithThisEmailAlreadyExist();
            res.send({error:err.message});
        }
    }
}