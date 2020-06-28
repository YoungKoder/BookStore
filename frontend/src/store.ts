import { createStore, combineReducers, applyMiddleware } from 'redux'
import printingEdition from "./reducers/printingEditionsReducer";
import modalWindow from './reducers/modalWindowReducer';
import thunk from 'redux-thunk';
import { PrintingEditionsState } from './types/stateTypes/printingEditionStateTypes';
import { modalState } from './reducers/modalWindowReducer';


export interface RootState{
    printingEdition: PrintingEditionsState 
    modalWindow: modalState
}

const store =  createStore(combineReducers<RootState>({
    printingEdition:printingEdition, modalWindow:modalWindow
}), applyMiddleware(thunk))

export default store;