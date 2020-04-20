import { PrintingEdition } from "../types/printingEdition";

export const searchEdition = (s:string, editions:PrintingEdition[])=>{
    const searchedPrintingEditions = editions.filter(edition => {
        const editionTitle = edition.title.toLowerCase();
        const filter = s.toLowerCase();
        return editionTitle.includes(filter);
    })
    return searchedPrintingEditions;
}