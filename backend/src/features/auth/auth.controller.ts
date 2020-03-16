import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import userModel from "../../dataAccess/entityModels/user.model";
import {addUser, logInUser } from "../../shared/services/auth.service";
import { User } from '../../shared/interfaces/entityInnerfaces/user.interface';
import {UserWithThisEmailAlreadyExist} from "../../shared/exeptions/UserExist.exeption";
import { WrongCredentialsException } from '../../shared/exeptions/WrongCredentials.exeption';

export class AuthController implements Controller{
    public path = '/auth';
    public router = express.Router();
    private user = userModel;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/loginIn`, this.loginIn);
    }

    private registration = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const userData:User = req.body;

        let UserDB = await addUser(userData);
        console.log(UserDB);
        if(!UserDB){
            next(new UserWithThisEmailAlreadyExist());
            return;
        }
        res.send(UserDB);
    }

    private loginIn = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const UserDB = await logInUser(req.body);
        if(!UserDB){
            next(new WrongCredentialsException());
            return;
        }
        res.send(UserDB);
    }
}