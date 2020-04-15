import axios from "axios";
import { EditionCurrency } from "../types/enums";
const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const getExchange = async(fromCurrency:EditionCurrency,toCurrency:string)=>{
    try{
        const res = await axios.get(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        return  res.data.rates[toCurrency]
    }catch{

    }
}
