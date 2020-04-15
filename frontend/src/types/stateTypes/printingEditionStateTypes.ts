import { PrintingEdition } from "../printingEdition";
import { EditionCurrency } from "../enums";

export interface PrintingEditionsState{
    printingEditions: PrintingEdition[],
    isFetching: boolean,
    error:string,
    currency:EditionCurrency
}