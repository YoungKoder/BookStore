import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import userModel from "../../dataAccess/entityModels/user.model";
import {addUser, logInUser} from "../../shared/services/auth.service";
import { User } from '../../shared/interfaces/entityInnerfaces/user.interface';
import {UserWithThisEmailAlreadyExist} from "../../shared/exeptions/UserExist.exeption";
import { WrongCredentialsException } from '../../shared/exeptions/WrongCredentials.exeption';
import { createToken } from '../../shared/services/token.service';
import { logger } from '../../utils/logger.utils';

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
        this.router.post(`${this.path}/logout`, this.loggingOut);
    }

    private registration = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const userData:User = req.body;
        let userEntity = await addUser(userData);
        console.log(userEntity);
        if(!userEntity){
            next(new UserWithThisEmailAlreadyExist());
            return;
        }
        let tokenData = await createToken(userEntity);
        res.setHeader('Authorization',[`Bearer ${tokenData.token}`]);
        logger.debug('Calling res.send');
        res.send({user:userEntity});
    }

    private loginIn = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const userData:User = req.body;
        const userEntity = await logInUser(userData);
        if(!userEntity){
            next(new WrongCredentialsException());
            return;
        }
        let tokenData = await createToken(userEntity);
        res.setHeader('Authorization',[`Bearer ${tokenData.token}`] );
        res.send({user:userEntity});
    }

    private loggingOut = (req:express.Request, res:express.Response)=>{
        res.setHeader('Authorization', ['Bearer ']);
        res.sendStatus(200);
    }
}