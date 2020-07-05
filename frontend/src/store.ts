import { createStore, combineReducers, applyMiddleware } from 'redux'
import printingEdition from "./reducers/printingEditionsReducer";
import modal from "./reducers/modalsReducer";
import thunk from 'redux-thunk';
import { PrintingEditionsState } from './types/stateTypes/printingEditionStateTypes';
import { ModalsState } from './types/Modals';



export interface RootState{
    printingEdition: PrintingEditionsState,
    modal:ModalsState 
}

const store =  createStore(combineReducers<RootState>({
    printingEdition:printingEdition, modal:modal
}), applyMiddleware(thunk))

export default store;