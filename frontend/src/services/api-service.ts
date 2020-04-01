import axios from "axios";
import { SignUpUserData, SignInUserData } from "../types/SignUpUserData";


export default class ApiServiceBookStore {
    
    registerUser = async(userData:SignUpUserData)=>{
        const {password, confirmPassword, ...other} = userData;
        const userForRequest = {
            ...other,
            password_hash:password
        }
        const res = await axios.post(`http://localhost:8082/auth/register`,userForRequest);
        console.log(res.status);
        console.log(res.data);
    }

    signInUser = async(userData:SignInUserData)=>{
        const {password, email} = userData;
        const userEntity = {
            email,
            password_hash:password
        }
        const res = await axios.post(`http://localhost:8082/auth/loginIn`, userEntity);
        console.log(res.data);
    }
}