import axios from "axios";
import { SignUpUserData, SignInUserData } from "../types/SignUpUserData";
import { User } from "../types/user";


const signUpUser = async(userData:SignUpUserData):Promise<User>=>{
    const {password, confirmPassword, ...other} = userData;
    const userForRequest = {
        ...other,
        password_hash:password
    }
    try {
        const response = await axios.post(`http://localhost:8082/auth/register`,
        userForRequest);
        const{email,userName,first_name,last_name,role} = response.data.user;
        const userFromResponse:User = {
            email,
            userName,
            first_name,
            last_name,
            role
        }
        return userFromResponse
    } catch (error) {
        throw new Error(`Can't sign Up  ${error}`);
    }
}
const signInUser = async(userData:SignInUserData)=>{
    const {password, email} = userData;
    const userEntity = {
        email,
        password_hash:password
    }
    try {
        await axios.post(`http://localhost:8082/auth/loginIn`, userEntity);
    } catch (error) {
    throw new Error(`Can't sign In ${error}`);
    }
    
}

export const authService = {
    signUpUser,
    signInUser
}