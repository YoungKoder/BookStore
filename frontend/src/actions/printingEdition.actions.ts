import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants"
import { PrintingEdition } from "../types/printingEdition"
import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types"


export const printingEditionsLoaded = (newBooks:PrintingEdition[]):PrintingEditionsActionTypes =>{
    return{
        type:printingEditionConstants.PRS_LOADED,
        payload:newBooks
    }
}