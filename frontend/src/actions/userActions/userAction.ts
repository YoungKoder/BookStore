import { User } from "../../types/user";
import { RegisterUser, SignInUser } from "../../types/actionTypes/actionCreators.types";

export const signUpUser = (user:User):RegisterUser=>{
    debugger
    console.log("I am in action");
    console.log(`user from registration form ${user}`);
    return{
        type:"SIGN_UP",
        user
    }
}

export const signInUser = (isAuth:boolean):SignInUser=>{
    return{
        type:"SIGN_IN",
        isAuth
    }
}