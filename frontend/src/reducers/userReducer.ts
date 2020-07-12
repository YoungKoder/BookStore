import { User } from "../types/user";
import { UserState } from "../types/stateTypes/userState";
import { UserActionTypes } from "../types/actionTypes/actionCreators.types";
import { boolean } from "yup";

const userState:UserState={
    user:{
        email:"",
        userName:"",
        first_name:"",
        last_name:"",
        role:1
    },
    isAuth:false,
    confirmedEmail:false
}

const reduce = (state:UserState = userState, action:UserActionTypes): UserState => {
    switch(action.type){
        case'SIGN_UP':
           return{
               ...state,
               user:{
                    email:action.user.email,
                    userName:action.user.userName,
                    first_name:action.user.first_name,
                    last_name:action.user.last_name,
                    role:action.user.role
               }
           }
        case 'SIGN_IN':
            return{
                ...state,
                user:{
                    email:action.user.email,
                    userName:action.user.userName,
                    first_name:action.user.first_name,
                    last_name:action.user.last_name,
                    role:action.user.role
                },
                isAuth:action.isAuth
            }
        case 'LOG_OUT':
            return{
                ...state,
                user:{
                    email:"",
                    userName:"",
                    first_name:"",
                    last_name:"",
                    role:1
                },
                isAuth:false
            }
        case 'CONFIRM_EMAIL':
            return{
                ...state,
                confirmedEmail:action.confirmEmail
            }
        default: 
            return state;
    }
}
export default reduce;