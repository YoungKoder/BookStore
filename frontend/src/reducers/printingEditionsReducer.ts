import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types";
import { PrintingEditionsState } from "../types/stateTypes/printingEditionStateTypes";
import { EditionCurrency } from "../types/enums";

const editions:PrintingEditionsState = {
    printingEditions:[],
    isFetching:false,
    error:"",
    currency:EditionCurrency.USD
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
        case 'PRS_SEARCH':
            return{
                ...state,
                printingEditions:action.searchedPrintingEditions
            }
        case 'PRS_CHANGE__CURRENCY':
            return{
                ...state,
                printingEditions:action.EditionsWithNewCurrency,
                currency:action.newCurrency
            }
        default:
            return state;
    }
}

export default reduce;
