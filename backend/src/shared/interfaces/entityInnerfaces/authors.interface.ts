import {Document} from 'mongoose';
import mongoose from 'mongoose';

export interface Author extends Document{
    name:string,
    createdDate?:Date,
    removed_at?:Boolean,
    product_ids:any
}