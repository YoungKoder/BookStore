import { printingEditionConstants } from "./constants/printindEditions.constants";
import { PrintingEdition } from "../printingEdition";

interface PrintingEditionsLoadedAction{
    type: typeof printingEditionConstants.PRS_LOADED,
    payload: PrintingEdition[]
}

export type PrintingEditionsActionTypes = PrintingEditionsLoadedAction;