import axios from "axios";
import { SignUpUserData } from "../types/SignUpUserData";


export default class ApiServiceBookStore {
    
    registerUser = async(userData:SignUpUserData)=>{
        const {password, confirmPassword, ...other} = userData;
        const userForRequest = {
            ...other,
            password_hash:password
        }
        for (const key in userForRequest) {
            if (userForRequest.hasOwnProperty(key)) {
                console.log(key);
            }
        }
        console.log(`>>> UserData for request: ${userForRequest}`)
        const res = await axios.post(`http://localhost:8082/auth/register`,userForRequest);
        console.log(res.status);
        console.log(res.data);
    }
}