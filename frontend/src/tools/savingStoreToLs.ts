import { RootState } from "../store";
import { User } from "../types/user";

export const savingUserToLocalStorage = (user:User)=>{
    try{
        // console.log(`changed store: ${state}`);
        const serializedStore = JSON.stringify(user);
        window.localStorage.setItem('user_state', serializedStore);
    }catch(e){

    }
}

export const loadUserFromLs = ()=>{
    try{
        const serializedUser = window.localStorage.getItem('user_state');
        if(!serializedUser)return undefined;

        return JSON.parse(serializedUser);
    }catch(e){
        return undefined;
    }
}