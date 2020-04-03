import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants";
import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types";
import { PrintingEditionsState } from "../types/stateTypes/printingEditionStateTypes";

const initialState:PrintingEditionsState = {
    printingEditions:[]
}

export const printingEditionsReducer = (state = initialState, action:PrintingEditionsActionTypes):PrintingEditionsState => {
    switch (action.type){
        case printingEditionConstants.PRS_LOADED:
            return{
                printingEditions:action.payload
            }
        default:
            return state;
    }
}