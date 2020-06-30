import { createStore, combineReducers, applyMiddleware } from 'redux'
import printingEdition from "./reducers/printingEditionsReducer";

import thunk from 'redux-thunk';
import { PrintingEditionsState } from './types/stateTypes/printingEditionStateTypes';



export interface RootState{
    printingEdition: PrintingEditionsState 
}

const store =  createStore(combineReducers<RootState>({
    printingEdition:printingEdition
}), applyMiddleware(thunk))

export default store;