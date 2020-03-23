import * as express from 'express';
import userModel from "../../dataAccess/entityModels/user.model";
import { Controller } from "../../shared/interfaces/controller.interface";
import { authMiddleware } from '../../shared/middleware/auth.middleware';
import { checkRoleMiddleware } from '../../shared/middleware/checkRole.middleware';
import { requestWithUser } from '../../shared/interfaces/requestWithUser.interface';
import { stickUserToRequestMiddleware } from '../../shared/middleware/stickUserToRequest.middleware';
import { findUserAndUpdate, getAllUsers, findUserById } from '../../shared/repositories/user.repository';
import { editPassword, deleteUser } from '../../shared/services/user.service';
import { runInNewContext } from 'vm';
import { HttpExeption } from '../../shared/exeptions/HttpExeption';

export class UserController implements Controller{
    public path = '/user';
    public router = express.Router();
    private user = userModel;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router
            .all(`${this.path}/*`,authMiddleware,stickUserToRequestMiddleware )
            .get(`${this.path}/profile`, this.getUserProfile)
            .put(`${this.path}/editProfile`, this.editProfile)
            .put(`${this.path}/editPassword`, this.editPassword)

      this.router
        .all(`${this.path}/*`, authMiddleware,checkRoleMiddleware)
        .get(`${this.path}/getAll`, this.getAllUsers)
        .delete(`${this.path}/:id`, this.removeUser)
        .get(`${this.path}/:id`, this.getOneUser);
    }

    private getUserProfile = async (req:requestWithUser, res:express.Response)=>{
        const userEntity = await findUserById(req.user.id);
        res.send(userEntity);
    }

    private editProfile = async(req:requestWithUser, res:express.Response)=>{
        const id = req.user.id;
        const newUserData = req.body;
        const userEntityWithNewData = await findUserAndUpdate(id,newUserData);
        res.send(userEntityWithNewData);
    }

    private editPassword = async(req:requestWithUser,res:express.Response, next:express.NextFunction)=>{
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
        const user = req.user;
        const userEntityWithNewPassword = await editPassword(oldPassword,newPassword,user);
        userEntityWithNewPassword? res.send(userEntityWithNewPassword) : next(new HttpExeption(401, "your old password is wrong"));
    }
    
    private getAllUsers = async(req:express.Request,res:express.Response)=>{
        const allUsers = await getAllUsers();
        res.send(allUsers);
    }

    private removeUser = async(req:express.Request,res:express.Response)=>{
        const id = req.params.id;
        const removedUserEntity = await deleteUser(id);
        res.send(removedUserEntity);
    }

    private getOneUser = async(req:express.Request,res:express.Response)=>{
        const id = req.params.id;
        const userEntity = await findUserById(id);
        res.send(userEntity);
    }
}