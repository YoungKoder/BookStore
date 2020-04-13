import { PrintingEdition } from "../interfaces/entityInnerfaces/printing_editions.interface";
import printingEditionModel from "../../dataAccess/entityModels/printing_editions.model";
import { findAuthorById } from "../repositories/author.repository";
import { Author } from "../interfaces/entityInnerfaces/authors.interface";

export const getAllPrintingEditions = async ():Promise<PrintingEdition[]>=>{
    const printingEditionsEntities = await printingEditionModel.find();
    return printingEditionsEntities;
}
export const addNewPrintingEdition = async (edition:PrintingEdition, authorId:string):Promise<PrintingEdition>=>{
    if(await printingEditionModel.findOne({title: edition.title})){
        return;
    }

    let editionEntity = await printingEditionModel.create(edition);
    editionEntity.author_ids = [...editionEntity.author_ids, authorId];
    editionEntity.save();

    return editionEntity;
} 
export const deletePrintingEdition = async(id:string):Promise<PrintingEdition>=>{
    const editionData = await findPrintingEditionByID(id);
    editionData.removed_at = true;
    const editionEntity = await printingEditionModel.create(editionData);
    return editionEntity;
}
export const findPrintingEditionByID = async(id:string):Promise<PrintingEdition>=>{
    let printingEditionEntity = await printingEditionModel.findById(id);
    return printingEditionEntity;
}
export const modifyPrintingEdition = async(id:string, printingEditionNewData:PrintingEdition):Promise<PrintingEdition>=>{
    const printingEditionEntity = await printingEditionModel.findByIdAndUpdate(id,printingEditionNewData,{new:true} );
    return printingEditionEntity;
}
export const addPrintingEditionToAuthor = async(authorId:string,editionEntityId:string):Promise<Author>=>{
    
    try{
        const authorEntity = await findAuthorById(authorId);
        authorEntity.product_ids = [...authorEntity.product_ids,editionEntityId];
        await authorEntity.save()
        return authorEntity;
    }
    catch{
        return;
    }
}   