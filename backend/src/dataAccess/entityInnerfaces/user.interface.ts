import {Document} from 'mongoose';
import { Role } from '../../shared/enums/role.enum';

export interface User extends Document{
    userName:string,
    email:string,
    avatar?: string,
    first_name: string,
    last_name: string,
    password_hash: string,
    createdDate?: Date,
    role: Role,
    removed_at?:Boolean
}