import axios from "axios";
import { SignUpUserData, SignInUserData } from "../types/SignUpUserData";


const signUpUser = async(userData:SignUpUserData)=>{
    const {password, confirmPassword, ...other} = userData;
    const userForRequest = {
        ...other,
        password_hash:password
    }
    try {
        await axios.post(`http://localhost:8082/auth/register`,userForRequest);
    } catch (error) {
        throw new Error("Can't sign Up");
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
        throw new Error("Can't sign In");
    }
    
}

export const authService = {
    signUpUser,
    signInUser
}