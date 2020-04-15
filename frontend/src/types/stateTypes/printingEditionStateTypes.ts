import { PrintingEdition } from "../printingEdition";
import { EditionCurrency, PriceFilter } from "../enums";

export interface PrintingEditionsState{
    printingEditions: PrintingEdition[],
    isFetching: boolean,
    error:string,
    currency:EditionCurrency,
    sortingByPrice:PriceFilter
}