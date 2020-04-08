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

export type PrintingEditionsActionTypes = PrintingEditionsLoadedAction | PrintingEditionsFetchingAction;