import { User } from "../../types/user";
import { RegisterUser, SignInUser, ConfirmEmailPasswordAssistance } from "../../types/actionTypes/actionCreators.types";

export const signUpUser = (user:User):RegisterUser=>{
    return{
        type:"SIGN_UP",
        user
    }
}

export const signInUser = (user:User, isAuth:boolean):SignInUser=>{
    return{
        type:"SIGN_IN",
        user,
        isAuth
    }
}

export const confirmEmail = (confirm:boolean):ConfirmEmailPasswordAssistance=>{
    return{
        type:"CONFIRM_EMAIL",
        confirmEmail:confirm
    }
}