import { printingEditionConstants } from "../types/actionTypes/constants/printindEditions.constants"
import { PrintingEdition } from "../types/printingEdition"
import { PrintingEditionsActionTypes, PrintingEditionsLoadedAction, PrintingEditionsFetchingAction} from "../types/actionTypes/actionCreators.types"
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

export const uploadBooks = ():ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => { 
        dispatch(printingEditionsFetching(true))
        console.log("Fetching books started");
        try{
            const editions = await printingEditionsService.getEditions();
            dispatch(printingEditionsLoaded(editions));
            dispatch(printingEditionsFetching(false));
            console.log("Fetching books finished");
        }catch{
            console.log("smth went wrong");
            throw new Error("Can't fetch data");
        }
    }
}