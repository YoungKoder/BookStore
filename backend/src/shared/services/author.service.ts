import { findPrintingEditionByID } from "./printing-edition.service"

export const addAuthorToPrintingEdition = async(printingEditionId:string,authorId:string)=>{
    const printingEditionEntity = await findPrintingEditionByID(printingEditionId);
    printingEditionEntity.author_ids = [...printingEditionEntity.author_ids, authorId];
    await printingEditionEntity.save();
}