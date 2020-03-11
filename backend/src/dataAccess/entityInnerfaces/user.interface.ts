import {Document} from 'mongoose';

export interface User extends Document{
    email:string,
    avatar: string | "",
    first_name: string,
    last_name: string,
    password_hash: string,
    role: string
}