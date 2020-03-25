import * as express from 'express';
import { Controller } from "../../shared/interfaces/controller.interface";
import { authMiddleware } from '../../shared/middleware/auth.middleware';
import { checkRoleMiddleware } from '../../shared/middleware/checkRole.middleware';
import { getAllAuthors, findAuthorById, addNewAuthor, deleteAuthor, modifyAuthorData } from '../../shared/repositories/author.repository';
import { addAuthorToPrintingEdition } from '../../shared/services/author.service';

export class AuthorController implements Controller{
    public path = '/author';
    public router = express.Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router
            .all(`${this.path}/*`, authMiddleware)
            .get(`${this.path}/getAll`, this.getAllAuthors)
            .get(`${this.path}/getAuthor/:id`, this.getOneAuthor);
        this.router
            .all(`${this.path}/*`, authMiddleware, checkRoleMiddleware)
            .post(`${this.path}/addAuthor`, this.addNewAuthor)
            .delete(`${this.path}/deleteAuthor/:id`, this.removeAuthor)
            .put(`${this.path}/updateProfileAuthor/:id`, this.updateProfileAuthor);
    }

    private getAllAuthors = async(req:express.Request, res:express.Response)=>{
        const allAuthors = await getAllAuthors();
        res.send(allAuthors);
    }
    private getOneAuthor = async(req:express.Request, res:express.Response)=>{
        const id = req.params.id;
        const userEntity = await findAuthorById(id);
        res.send(userEntity);
    }
    private addNewAuthor = async(req:express.Request, res:express.Response)=>{ 
        const authorData = req.body;    
        const authorEntity = await addNewAuthor(authorData);
        res.send(authorEntity);
    }
    private removeAuthor = async(req:express.Request, res:express.Response)=>{
        const id = req.params.id;
        const removedAuthorEntity = await deleteAuthor(id);
        return removedAuthorEntity;
    }
    private updateProfileAuthor = async(req:express.Request, res:express.Response)=>{
        const id = req.params.id;
        const newAuthorData = req.body;
        const newAuthorEntity = await modifyAuthorData(id,newAuthorData);
        return newAuthorEntity;
    }
}