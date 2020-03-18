import { PrintingEdition } from "../interfaces/entityInnerfaces/printing_editions.interface";
import printingEditionModel from "../../dataAccess/entityModels/printing_editions.model";

export const addNewPrintingEdition = async (edition:PrintingEdition):Promise<PrintingEdition>=>{
    const editionData = edition;
    let editionEntity = await printingEditionModel.create(editionData);
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