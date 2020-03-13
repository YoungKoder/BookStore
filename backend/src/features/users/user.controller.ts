import * as express from 'express';
import {User} from "../../shared/interfaces/entityInnerfaces/user.interface";
import userModel from "../../dataAccess/entityModels/user.model";
import {Controller} from "../../shared/interfaces/controller.interface";
import {getHashPassword} from "../../utils/hashingPassword.util";
import {HttpExeption} from "../../shared/exeptions/HttpExeption";

export class UserController implements Controller{
    public path = '/users';
    public router = express.Router();
    private user = userModel;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.addUser);
    }

    private getAllUsers = (req:express.Request, res:express.Response)=>{
        this.user.find()
            .then((users)=>{
                res.send(users)
            })
    }

    private addUser = (req:express.Request, res:express.Response, next:express.NextFunction)=>{
        const crypt = getHashPassword(req.body, req.body.password_hash)
            .then(response => userModel.create(response)
                .then(result => res.send(result))
                .catch(err => next(new HttpExeption(422, err.message))));
    }
}

