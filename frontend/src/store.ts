import { createStore, combineReducers, applyMiddleware } from 'redux'
import printingEdition from "./reducers/printingEditionsReducer";
import modal from "./reducers/modalsReducer";
import user from "./reducers/userReducer";
import order from "./reducers/orderReducer";
import thunk from 'redux-thunk';
import { PrintingEditionsState } from './types/stateTypes/printingEditionStateTypes';
import { ModalsState } from './types/stateTypes/Modals';
import { UserState } from './types/stateTypes/userState';
import { OrderState } from './types/stateTypes/OrderState';



export interface RootState{
    printingEdition: PrintingEditionsState,
    modal:ModalsState,
    user:UserState,
    order:OrderState
}

let store = createStore(combineReducers<RootState>({
    printingEdition:printingEdition, 
    modal:modal,
    user:user,
    order:order
}), applyMiddleware(thunk))





// const oldState = loadState();
// store = createStore(combineReducers<RootState>({
//     printingEdition:printingEdition, 
//     modal:modal,
//     user:user,
//     order:order
// }),oldState, applyMiddleware(thunk))


// store.subscribe(()=>{
//     savingStoreToLocalStorage(store.getState().user)
// })

export default store;