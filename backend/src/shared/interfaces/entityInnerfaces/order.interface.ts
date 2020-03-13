import { User } from './user.interface';
import {Document} from 'mongoose';
import mongoose from 'mongoose';

export interface Order{
    user_id:User,
    description:string,
    date:Date,
    isRemoved:Boolean,
    items: Object
}