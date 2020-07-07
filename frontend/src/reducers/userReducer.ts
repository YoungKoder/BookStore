import { User } from "../types/user";
import { UserState } from "../types/stateTypes/userState";
import { UserActionTypes } from "../types/actionTypes/actionCreators.types";

const userState:UserState={
    user:{
        email:"",
        userName:"",
        first_name:"",
        last_name:"",
        role:1
    },
    isAuth:false
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
        default: 
            return state;
    }
}
export default reduce;