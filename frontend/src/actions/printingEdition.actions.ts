import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants"
import { PrintingEdition } from "../types/printingEdition"
import { 
    PrintingEditionsLoadedAction, 
    PrintingEditionsFetchingAction, 
    PrintingEditionsErrorAction } from "../types/actionTypes/actionCreators.types"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {printingEditionsService} from "../services/printingEditionsService";

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

export const uploadBooks = ():ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => { 
        dispatch(printingEditionsFetching(true))
        dispatch(printingEditionsError(false))
        console.log("Fetching books started");
        try{
            const editions = await printingEditionsService.getEditions();
            
            dispatch(printingEditionsLoaded(editions));
            dispatch(printingEditionsFetching(false));
            console.log("Fetching books finished");
        }catch{
            dispatch(printingEditionsError(true))
            dispatch(printingEditionsFetching(false));
        }
    }
}