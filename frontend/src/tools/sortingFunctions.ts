import { PrintingEdition } from "../types/printingEdition";

export const fromLowPriceToHight = (printingEditions:PrintingEdition[]) =>{
    printingEditions.sort((a,b)=>{
        return a.price - b.price
    })
}
export const fromHightPriceToLow = (printingEditions:PrintingEdition[]) => {
    printingEditions.sort((a,b)=>{
        return b.price - a.price
    })
}