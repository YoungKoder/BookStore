interface Author{
    _id:string,
    name:string
}

enum EditionType {
    book = 1,
    magazine = 2,
    comics = 3

}
export enum EditionCurrency{
    USD ="USD",
    RUB="RUB",
    EUR="EUR"
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