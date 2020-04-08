import axios from "axios";
import { PrintingEdition } from "../types/printingEdition";

const getEditions = async():Promise<PrintingEdition[]>=>{
    const res = await axios.get(`http://localhost:8082/printing-editions`)
    const data:PrintingEdition[] = res.data;
    return data;
}

export const printingEditionsService = {
    getEditions
}