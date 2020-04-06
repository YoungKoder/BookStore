import axios from "axios";
import { SignUpUserData, SignInUserData } from "../types/SignUpUserData";
import { PrintingEdition } from "../types/printingEdition";

export default class ApiServiceBookStore {
    public printingEditions:PrintingEdition[] = [];
    
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

    getPrintingEditions = async():Promise<PrintingEdition[]> => {
        const res = await axios.get(`http://localhost:8082/printing-editions`)
        const data:PrintingEdition[] = res.data;
        // this.printingEditions =[
        //     ...this.printingEditions,
        //     data
        // ]
        return data;
    }
}