import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants";
import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types";
import { PrintingEditionsState } from "../types/stateTypes/printingEditionStateTypes";
import { boolean } from "yup";

const editions:PrintingEditionsState = {
    printingEditions:[],
    isFetching:false,
    error:""
}
const reduce = (state:PrintingEditionsState = editions, action:PrintingEditionsActionTypes):PrintingEditionsState => {
    switch (action.type){
        case'PRS_LOADED':
            return{
                ...state,
                printingEditions:action.printingEditions,
            }
        case 'PRS_FETCHING':
            return{
                ...state,
                isFetching:action.isFetching
            }
        case 'PRS_ERROR':
            return{
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}

export default reduce;
