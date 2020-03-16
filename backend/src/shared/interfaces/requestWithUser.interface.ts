import { Request } from 'express';
import { User } from './entityInnerfaces/user.interface';

export interface RequestWithUser extends Request{
    user: User
}