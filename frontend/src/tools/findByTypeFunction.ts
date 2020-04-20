import { PrintingEdition } from "../types/printingEdition";
import { EditionType } from "../types/enums";

export const findByType = (type:EditionType, editions:PrintingEdition[]): PrintingEdition[]=>{
    let sortedPrintingEditions = editions.filter(edition => {
        return edition.type == type
    })
    return sortedPrintingEditions
}