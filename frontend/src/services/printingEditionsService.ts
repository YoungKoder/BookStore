import axios from "axios";
import { PrintingEdition } from "../types/printingEdition";

const getEditions = async():Promise<PrintingEdition[]>=>{
    try{
        const res = await axios.get(`http://localhost:8082/printing-editions`)
        const data:PrintingEdition[] = res.data;
        return data;
    }catch{
        throw( new Error("smth went wrong"));
    }
    
}

export const printingEditionsService = {
    getEditions
}