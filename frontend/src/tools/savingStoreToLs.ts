import { RootState } from "../store";

export const savingStoreToLocalStorage = (state:any)=>{
    try{
        console.log(`changed store: ${state}`);
        const serializedStore = JSON.stringify(state);
        window.localStorage.setItem('user_state', serializedStore);
    }catch(e){

    }
}