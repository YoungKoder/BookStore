import { PrintingEdition } from "../types/printingEdition"
import { 
    PrintingEditionsLoadedAction, 
    PrintingEditionsFetchingAction, 
    PrintingEditionsErrorAction,
    PrintingEditionSearch} from "../types/actionTypes/actionCreators.types"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {printingEditionsService} from "../services/printingEditionsService";
import store from "../store";

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
    return{
        type:"PRS_SEARCH",
        searchedPrintingEditions:searched
    }
}

export const uploadBooks = ():ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => { 
        dispatch(printingEditionsFetching(true))
        dispatch(printingEditionsError(false))
        try{
            const editions = await printingEditionsService.getEditions();
            
            dispatch(printingEditionsLoaded(editions));
            dispatch(printingEditionsFetching(false));
        }catch{
            dispatch(printingEditionsError(true))
            dispatch(printingEditionsFetching(false));
        }
    }
}

export const searchEditions = (s:string):ThunkAction<Promise<void>,{},{},AnyAction> =>{
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void>=>{
        console.log("string into action", s);
            const currentPrintingEditions = store.getState()
            console.log("PrintingEditionsFromStore",currentPrintingEditions)
            let searchedPrintingEditions:PrintingEdition[] = [];
            searchedPrintingEditions = currentPrintingEditions.printingEdition.printingEditions.filter(edition => {
                const editionTitle = edition.title.toLowerCase();
                const filter = s.toLowerCase();
                return editionTitle.includes(filter);
            })
            dispatch(printingEditionSearched(searchedPrintingEditions));
    }   
}