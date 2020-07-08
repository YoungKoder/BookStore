import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import userModel from "../../dataAccess/entityModels/user.model";
import {addUser, logInUser, recoverPassword} from "../../shared/services/auth.service";
import { User } from '../../shared/interfaces/entityInnerfaces/user.interface';
import {UserWithThisEmailAlreadyExist} from "../../shared/exeptions/UserExist.exeption";
import { WrongCredentialsException } from '../../shared/exeptions/WrongCredentials.exeption';
import { createToken } from '../../shared/services/token.service';
import { logger } from '../../utils/logger.utils';
import { requestWithUser } from '../../shared/interfaces/requestWithUser.interface';
import { sendMail } from '../../utils/nodemailer.utils';

export class AuthController implements Controller{
    public path = '/auth';
    public router = express.Router();
    private user:User;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/forgotpassword`, this.forgotPassword);
        this.router.post(`${this.path}/loginIn`, this.loginIn);
        this.router.post(`${this.path}/logout`, this.loggingOut);
    }

    private registration = async(req:express.Request,res:express.Response, next:express.NextFunction)=>{
        const userData:User = req.body;
        this.user = userData;
        let userEntity = await addUser(userData);
        if(!userEntity){
            next(new UserWithThisEmailAlreadyExist());
            return;
        }
        sendMail(userData);

        // res.redirect(`${this.path}/register`);
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

    private forgotPassword = async (req:express.Request, res:express.Response, next:express.NextFunction)=>{
        const userEmail:String = req.body;
        const newUserEntityPass:String = await recoverPassword(userEmail);
        if(!newUserEntityPass){
            next(new WrongCredentialsException());
            return;
        }
        sendMail(null,newUserEntityPass);
        res.sendStatus(200);
    }
}