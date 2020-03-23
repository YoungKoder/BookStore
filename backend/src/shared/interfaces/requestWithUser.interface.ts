import { User } from "./entityInnerfaces/user.interface";
import { Request } from 'express';

export interface requestWithUser extends Request{
    user : User;
}
