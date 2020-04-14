import { printingEditionConstants } from "./constants/printindEditions.constants";
import { PrintingEdition } from "../printingEdition";

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
export type PrintingEditionsActionTypes = PrintingEditionsLoadedAction | PrintingEditionsFetchingAction |PrintingEditionsErrorAction | PrintingEditionSearch;