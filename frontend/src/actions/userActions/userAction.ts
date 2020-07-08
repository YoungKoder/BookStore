import { User } from "../../types/user";
import { RegisterUser, SignInUser } from "../../types/actionTypes/actionCreators.types";

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