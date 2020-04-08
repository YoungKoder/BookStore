import { PrintingEdition } from "../printingEdition";

export interface PrintingEditionsState{
    printingEditions: PrintingEdition[],
    isFetching: boolean
}