import * as express from 'express';
import {User} from "../../shared/interfaces/entityInnerfaces/user.interface";
import userModel from "../../dataAccess/entityModels/user.model";
import {Controller} from "../../shared/interfaces/controller.interface";
import {getHashPassword} from "../../utils/hashingPassword.util";

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

    private addUser = (req:express.Request, res:express.Response)=>{
        const userData:User = req.body;
        const crypt = getHashPassword(userData, req.body.password_hash)
            .then(response => userModel.create(response)
                .then(result => res.send(result)));
    }
}

