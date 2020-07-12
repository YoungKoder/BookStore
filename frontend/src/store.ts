import { createStore, combineReducers, applyMiddleware } from 'redux'
import printingEdition from "./reducers/printingEditionsReducer";
import modal from "./reducers/modalsReducer";
import user from "./reducers/userReducer";
import thunk from 'redux-thunk';
import { PrintingEditionsState } from './types/stateTypes/printingEditionStateTypes';
import { ModalsState } from './types/stateTypes/Modals';
import { UserState } from './types/stateTypes/userState';
import { savingStoreToLocalStorage } from './tools/savingStoreToLs';



export interface RootState{
    printingEdition: PrintingEditionsState,
    modal:ModalsState,
    user:UserState
}

const loadState = ()=>{
    try{
        const serializedState = window.localStorage.getItem('user_state');
        if(!serializedState)return undefined;

        return JSON.parse(serializedState);
    }catch(e){
        return undefined;
    }
}

const oldState = loadState();
const store = oldState?  createStore(combineReducers<RootState>({
    printingEdition:printingEdition, 
    modal:modal,
    user:user
}),oldState, applyMiddleware(thunk)):createStore(combineReducers<RootState>({
    printingEdition:printingEdition, 
    modal:modal,
    user:user
}), applyMiddleware(thunk))

store.subscribe(()=>{
    savingStoreToLocalStorage(store.getState())
})


export default store;