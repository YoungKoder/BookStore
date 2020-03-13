import {Document} from 'mongoose';
import mongoose from 'mongoose';

export interface Order{
    user_id:mongoose.Schema.Types.ObjectId,
    items: Object
}