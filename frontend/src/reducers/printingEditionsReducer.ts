import { PrintingEditionsActionTypes } from "../types/actionTypes/actionCreators.types";
import { PrintingEditionsState } from "../types/stateTypes/printingEditionStateTypes";
import { EditionCurrency, PriceFilter, EditionType } from "../types/enums";
import { boolean } from "yup";
import { types } from "util";

const editions:PrintingEditionsState = {
    uploadPrintingEditions:[],
    printingEditionsToShow:[],
    filteredEditions:[],
    serchedEditions:[],
    doesSearchOn:false,
    doesFilterAdded:false,
    isFetching:false,
    error:"",
    currency:EditionCurrency.USD,
    sortingByPrice:PriceFilter.LowToHight,
    types:[]
}
const reduce = (state:PrintingEditionsState = editions, action:PrintingEditionsActionTypes):PrintingEditionsState => {
    switch (action.type){
        case'PRS_LOADED':
            return{
                ...state,
                uploadPrintingEditions:action.printingEditions,
                printingEditionsToShow:action.printingEditions
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
                printingEditionsToShow:action.searchedPrintingEditions,
                serchedEditions:action.searchedPrintingEditions,
                doesSearchOn:action.doesSearchOn
            }
        case 'PRS_CHANGE__CURRENCY':
            return{
                ...state,
                printingEditionsToShow:action.EditionsWithNewCurrency,
                currency:action.newCurrency
            }
        case "PRS_SORT_BY_PRICE":
            return{
                ...state,
                sortingByPrice:action.newSortingWay,
                printingEditionsToShow:action.replacedEditions
            }
        case "PRS_SORT_BY_TYPE":
            return{
                ...state,
                printingEditionsToShow:action.sortedPrintingEditions,
                filteredEditions:action.sortedPrintingEditions,
                doesFilterAdded:action.doesFilterAdded,
                types:[
                    ...state.types,
                    action.filterType
                ]
            }
        default:
            return state;
    }
}

export default reduce;
