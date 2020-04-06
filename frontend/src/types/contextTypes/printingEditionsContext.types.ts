import { PrintingEdition } from "../printingEdition";

export interface PrintingEditionCtx {
    actions: Action
}
interface Action{
    getBooks:Promise<PrintingEdition[]>
}