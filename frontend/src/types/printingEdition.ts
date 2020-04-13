interface Author{
    _id:string,
    name:string
}

export interface PrintingEdition{
    title:string,
    description: string,
    cover_image?: string,
    removed_at?: Boolean,
    type: 1 | 2 |3 ,
    price: number,
    currency: 1|2|3,
    author_ids: Author[],
    _id?: any
}