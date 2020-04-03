import axios from "axios";
import { SignUpUserData, SignInUserData } from "../types/SignUpUserData";
import {PrintingEdition} from "../../../backend/src/shared/interfaces/entityInnerfaces/printing_editions.interface";
import { printingEditionContext } from "../types/contexts/printingEditionContext";

export default class ApiServiceBookStore {
    public printingEditions:printingEditionContext[] = [];
    
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

    getPrintingEditions = async() => {
        const res = await axios.get(`http://localhost:8082/printing-editions`)
        const data:printingEditionContext = res.data;
        this.printingEditions =[
            ...this.printingEditions,
            data
        ]
    }
}