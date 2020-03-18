import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import printingEditionModel from '../../dataAccess/entityModels/printing_editions.model';
import { addNewPrintingEdition } from '../../shared/services/printing-edition.service';

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
        this.router.post(`${this.path}`, this.addNewPrintingEdition);
    }

    private getAllPrintingEd = async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
        const printingEditions = await this.printingEdition.find();
        res.send(printingEditions);
    }

    private getThePrintingEdByID = async(req:express.Request,res:express.Response)=>{
        const id = req.params.id;
        const printingEditionById = await this.printingEdition.findById(id);
        res.send(printingEditionById);
    }

    private addNewPrintingEdition = async(req:express.Request,res:express.Response)=>{
        const editionData = req.body;
        const editionEntity = await addNewPrintingEdition(editionData);
        res.send(editionEntity);
    }
}