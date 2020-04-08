import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants";
import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types";
import { PrintingEditionsState } from "../types/stateTypes/printingEditionStateTypes";

const editions:PrintingEditionsState = {
    printingEditions:[],
    isFetching:false
}

const reduce = (state:PrintingEditionsState = editions, action:PrintingEditionsActionTypes):PrintingEditionsState => {
    switch (action.type){
        case'PRS_LOADED':
            return{
                ...state,printingEditions:action.printingEditions,
            }
        case 'PRS_FETCHING':
            return{
                ...state,
                isFetching:action.isFetching
            }
        default:
            return state;
    }
}

export default reduce;
