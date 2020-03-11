import {Document} from 'mongoose';

export interface PrintingEditions extends Document{
    name:string,
    description: string | "",
    cover_image: string,
    removed_at: Date,
    type: string,
    price: number,
    currency: string,
    author_ids: Object
}