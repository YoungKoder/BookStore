import { printingEditionsLoaded, printingEditionsFetching, printingEditionsError, printingEditionSearched, printingEditionsChangeCurrency, printingEditionsChangeSortingWay } from "./printingEdition.actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { printingEditionsService } from "../services/printingEditionsService";
import store from "../store";
import { PrintingEdition } from "../types/printingEdition";
import { EditionCurrency, PriceFilter } from "../types/enums";
import { getExchange } from "../services/exchangeRatesApiService";
import { fromLowPriceToHight, fromHightPriceToLow } from "../tools/sortingFunctions";

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
export const changeSortingWay = (sortingWay:PriceFilter):ThunkAction<Promise<void>,{},{},AnyAction> => {
    return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        const currentState = store.getState();
        const editions = currentState.printingEdition.printingEditions;
        if(sortingWay === PriceFilter.LowToHight){
            fromLowPriceToHight(editions)
        }else{
            fromHightPriceToLow(editions)
        }
        dispatch(printingEditionsChangeSortingWay(sortingWay,editions))
    }
}