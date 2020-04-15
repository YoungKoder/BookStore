import { printingEditionsLoaded, printingEditionsFetching, printingEditionsError, printingEditionSearched, printingEditionsChangeCurrency } from "./printingEdition.actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { printingEditionsService } from "../services/printingEditionsService";
import store from "../store";
import { PrintingEdition } from "../types/printingEdition";
import { EditionCurrency } from "../types/enums";
import { getExchange } from "../services/exchangeRatesApiService";

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
export const changeCurrency = (toCurrency:EditionCurrency):ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        
        const currentState = store.getState();
        
        const currencyFrom:EditionCurrency = currentState.printingEdition.currency;
        const exchange = await getExchange(currencyFrom, toCurrency);

        currentState.printingEdition.printingEditions.map((edition) => {
            const newPrice = Math.floor(edition.price*exchange);
            edition.price = newPrice;
            edition.currency = toCurrency;
            console.log("edition", edition);
        })
        dispatch(printingEditionsChangeCurrency(currentState.printingEdition.printingEditions,toCurrency))
    }
}