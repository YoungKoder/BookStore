import { PrintingEdition } from "../types/printingEdition"
import { 
    PrintingEditionsLoadedAction, 
    PrintingEditionsFetchingAction, 
    PrintingEditionsErrorAction,
    PrintingEditionSearch,
    PrintingEditionsChangeCurrency,
    PrintingEditionsSortingByPrice,
    PrintingEditionSortingByType,
    ChangePage} from "../types/actionTypes/actionCreators.types"
import { EditionCurrency, PriceFilter, EditionType } from "../types/enums"


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
export const printingEditionSearched = (searched:PrintingEdition[],doesSearchOn:boolean):PrintingEditionSearch =>{
    return{
        type:"PRS_SEARCH",
        searchedPrintingEditions:searched,
        doesSearchOn
    }
}
export const printingEditionsChangeCurrency = (payload:PrintingEdition[],currency:EditionCurrency):PrintingEditionsChangeCurrency =>{
    return {
        type:"PRS_CHANGE__CURRENCY",
        EditionsWithNewCurrency:payload,
        newCurrency:currency
    }
}
export const printingEditionsChangeSortingWay = (newSortingWay:PriceFilter, replacedEditions:PrintingEdition[]):PrintingEditionsSortingByPrice => {
    return {
        type:"PRS_SORT_BY_PRICE",
        newSortingWay,
        replacedEditions
    }
}
export const printingEditionsFilterByType = (sortedEditions: PrintingEdition[],doesFilterAdded:boolean,filterType:EditionType):PrintingEditionSortingByType => {
    return{
        type:"PRS_SORT_BY_TYPE",
        sortedPrintingEditions:sortedEditions,
        doesFilterAdded,
        filterType
    }
}
export const changePage = (currentPrintingEditions:PrintingEdition[]):ChangePage =>{
    return{
        type:"CHANGE_PAGE",
        currentPrintingEditions
    }
}
