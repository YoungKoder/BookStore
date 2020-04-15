import { printingEditionConstants } from "./constants/printindEditions.constants";
import { PrintingEdition } from "../printingEdition";
import { EditionCurrency, PriceFilter } from "../enums";

export interface PrintingEditionsLoadedAction{
    type: "PRS_LOADED",
    printingEditions: PrintingEdition[]
}
export interface PrintingEditionsFetchingAction{
    type: "PRS_FETCHING",
    isFetching: boolean
}
export interface PrintingEditionsErrorAction{
    type: "PRS_ERROR",
    error:string
}
export interface PrintingEditionSearch{
    type: "PRS_SEARCH",
    searchedPrintingEditions:PrintingEdition[];
}
export interface PrintingEditionsChangeCurrency{
    type:"PRS_CHANGE__CURRENCY",
    EditionsWithNewCurrency:PrintingEdition[],
    newCurrency:EditionCurrency;
}
export interface PrintingEditionsSortingByPrice{
    type:"PRS_SORT_BY_PRICE",
    newSortingWay:PriceFilter,
    replacedEditions:PrintingEdition[]
}
export type PrintingEditionsActionTypes = PrintingEditionsLoadedAction | 
PrintingEditionsFetchingAction |PrintingEditionsErrorAction | 
PrintingEditionSearch | PrintingEditionsChangeCurrency
|PrintingEditionsSortingByPrice;