import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import printingEditionModel from '../../dataAccess/entityModels/printing_editions.model';
import { addNewPrintingEdition, findPrintingEditionByID, deletePrintingEdition, modifyPrintingEdition } from '../../shared/services/printing-edition.service';
import {authMiddleware} from "../../shared/middleware/auth.middleware";
import { PrintingEdition } from '../../shared/interfaces/entityInnerfaces/printing_editions.interface';


export class PrintingEditionsController implements Controller{
    public path = '/printing-editions';
    public router = express.Router();
    private printingEdition = printingEditionModel;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){

        this.router.get(`${this.path}`, this.getAllPrintingEd);
        this.router.get(`${this.path}/:id`, this.getThePrintingEdByID);
        this.router
            .all(`${this.path}/*`,authMiddleware)
            .post(`${this.path}/addingNew`, this.addNewPrintingEdition)
            .delete(`${this.path}/:id`, this.deletePrintingEditionEntity)
            .put(`${this.path}/:id`, this.modifyPrintingEdition);
    }

    private getAllPrintingEd = async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
        const printingEditions = await this.printingEdition.find();
        res.send(printingEditions);
    }

    private getThePrintingEdByID = async(req:express.Request,res:express.Response)=>{
        const id = req.params.id;
        const printingEditionentity = await findPrintingEditionByID(id);
        res.send(printingEditionentity);
    }

    private addNewPrintingEdition = async(req:express.Request,res:express.Response)=>{
        const editionData:PrintingEdition = req.body;
        const editionEntity = await addNewPrintingEdition(editionData);
        res.send({edition:editionEntity});
    }
    private deletePrintingEditionEntity = async(req:express.Request,res:express.Response)=>{
        const editionEntity = await deletePrintingEdition(req.params.id);
        res.send(editionEntity);
    }
    private modifyPrintingEdition = async(req:express.Request, res:express.Response)=>{
        const id = req.params.id;
        const newEditionData = req.body;
        const editionEntity = await modifyPrintingEdition(id,newEditionData);
        res.send(editionEntity);
    }
}