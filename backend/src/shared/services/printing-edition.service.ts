import { PrintingEdition } from "../interfaces/entityInnerfaces/printing_editions.interface";
import printingEditionModel from "../../dataAccess/entityModels/printing_editions.model";

export const addNewPrintingEdition = async (edition:PrintingEdition):Promise<PrintingEdition>=>{
    const editionData = edition;
    let editionEntity = await printingEditionModel.create(editionData);
    return editionEntity;
} 