import { EditionCurrency, EditionType } from "./enums";

export interface Author{
    _id:string,
    name:string
}

export interface PrintingEdition{
    title:string,
    description: string,
    cover_image?: string,
    removed_at?: Boolean,
    type:  EditionType,
    price: number,
    currency: EditionCurrency,
    author_ids: Author[],
    _id?: any
}