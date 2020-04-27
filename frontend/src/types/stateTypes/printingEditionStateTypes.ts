import { PrintingEdition } from "../printingEdition";
import { EditionCurrency, PriceFilter, EditionType } from "../enums";

export interface PrintingEditionsState{
    uploadPrintingEditions: PrintingEdition[],
    printingEditionsToShow:PrintingEdition[],
    filteredEditions:PrintingEdition[],
    serchedEditions:PrintingEdition[],
    doesSearchOn:boolean,
    doesFilterAdded:boolean,
    isFetching: boolean,
    error:string,
    currency:EditionCurrency,
    sortingByPrice:PriceFilter,
    types:EditionType[],
    appliedFilters: string[]
}