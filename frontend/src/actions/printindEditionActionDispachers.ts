import { printingEditionsLoaded, printingEditionsFetching, printingEditionsError, printingEditionSearched, printingEditionsChangeCurrency, printingEditionsChangeSortingWay, printingEditionsFilterByType } from "./printingEdition.actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { printingEditionsService } from "../services/printingEditionsService";
import store from "../store";
import { PrintingEdition } from "../types/printingEdition";
import { EditionCurrency, PriceFilter, EditionType } from "../types/enums";
import { getExchange } from "../services/exchangeRatesApiService";
import { fromLowPriceToHight, fromHightPriceToLow } from "../tools/sortingFunctions";
import { findByType } from "../tools/findByTypeFunction";
import { searchEdition } from "../tools/searchEdition";

export const uploadBooks = ():ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => { 
        dispatch(printingEditionsFetching(true))
        dispatch(printingEditionsError(false))
        try{
            const editions = await printingEditionsService.getEditions();
            fromLowPriceToHight(editions);
            // fromHightPriceToLow(editions);
            
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
            const currentState = store.getState()
            
            let searchedPrintingEditions:PrintingEdition[] = [];
            if(s==="" && currentState.printingEdition.doesFilterAdded){
                dispatch(printingEditionSearched(currentState.printingEdition.filteredEditions,false))
            }
            else if (s==="" && !currentState.printingEdition.doesFilterAdded){
                dispatch(printingEditionSearched(currentState.printingEdition.uploadPrintingEditions,false))
            }else if(s!=="" && currentState.printingEdition.doesFilterAdded) {
                searchedPrintingEditions = searchEdition(s,currentState.printingEdition.filteredEditions);
                dispatch(printingEditionSearched(searchedPrintingEditions,true));
            }else if(s!=="" && !currentState.printingEdition.doesFilterAdded){
                searchedPrintingEditions = searchEdition(s,currentState.printingEdition.uploadPrintingEditions);
                dispatch(printingEditionSearched(searchedPrintingEditions,true));
            }
    }   
}
export const changeCurrency = (toCurrency:EditionCurrency):ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        
        const currentState = store.getState();
        
        const currencyFrom:EditionCurrency = currentState.printingEdition.currency;
        const exchange = await getExchange(currencyFrom, toCurrency);

        currentState.printingEdition.uploadPrintingEditions.map((edition) => {
            const newPrice = Math.floor(edition.price*exchange);
            edition.price = newPrice;
            edition.currency = toCurrency;
        })
        dispatch(printingEditionsChangeCurrency(currentState.printingEdition.uploadPrintingEditions,toCurrency))
    }
}
export const changeSortingWay = (sortingWay:PriceFilter):ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        const currentState = store.getState();
        const editions = currentState.printingEdition.uploadPrintingEditions;
        if(sortingWay === PriceFilter.LowToHight){
            fromLowPriceToHight(editions)
        }else{
            fromHightPriceToLow(editions)
        }
        dispatch(printingEditionsChangeSortingWay(sortingWay,editions))
    }
}
export const sortByType = (type:EditionType):ThunkAction<Promise<void>,{},{},AnyAction> =>{
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {

        const currentState = store.getState();

        let sortedPrintingEditions:PrintingEdition[] = [];
        if(type !== EditionType.default && currentState.printingEdition.doesSearchOn){
            sortedPrintingEditions = findByType(type,currentState.printingEdition.serchedEditions)
            dispatch(printingEditionsFilterByType(sortedPrintingEditions,true,type));
        }
        else if (type !== EditionType.default && !currentState.printingEdition.doesSearchOn){
            sortedPrintingEditions = findByType(type,currentState.printingEdition.uploadPrintingEditions)
            dispatch(printingEditionsFilterByType(sortedPrintingEditions,true,type));
        }
        else if( type === EditionType.default && currentState.printingEdition.doesSearchOn){
            dispatch(printingEditionsFilterByType(currentState.printingEdition.serchedEditions,false,type))
        }
        else if(type === EditionType.default && !currentState.printingEdition.doesSearchOn){
            dispatch(printingEditionsFilterByType(currentState.printingEdition.uploadPrintingEditions,false,type))
        }
    }
}