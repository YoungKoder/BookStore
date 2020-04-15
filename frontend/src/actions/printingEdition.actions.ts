import { PrintingEdition } from "../types/printingEdition"
import { 
    PrintingEditionsLoadedAction, 
    PrintingEditionsFetchingAction, 
    PrintingEditionsErrorAction,
    PrintingEditionSearch,
    PrintingEditionsChangeCurrency} from "../types/actionTypes/actionCreators.types"
import { EditionCurrency } from "../types/enums"


export const printingEditionsLoaded = (newBooks:PrintingEdition[]):PrintingEditionsLoadedAction =>{
    return{
        type: "PRS_LOADED",
        printingEditions:newBooks
    }
}
export const printingEditionsFetching = (isFetching:boolean):PrintingEditionsFetchingAction => {
    return{
        type:"PRS_FETCHING",
        isFetching
    }
}

export const printingEditionsError = (error:boolean):PrintingEditionsErrorAction => {
    
    if(error){
        return {
            type: "PRS_ERROR",
            error:"Cant fetch printing Editions"
        }
    }else{
        return{
            type: "PRS_ERROR",
            error:""
        }
    }
}
export const printingEditionSearched = (searched:PrintingEdition[]):PrintingEditionSearch =>{
    // console.log("i was called printingEditionSearched ");
    return{
        type:"PRS_SEARCH",
        searchedPrintingEditions:searched
    }
}
export const printingEditionsChangeCurrency = (payload:PrintingEdition[],currency:EditionCurrency):PrintingEditionsChangeCurrency =>{
    return {
        type:"PRS_CHANGE__CURRENCY",
        EditionsWithNewCurrency:payload,
        newCurrency:currency
    }
}
