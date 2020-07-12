import { User } from "../user";

export interface UserState{
    user:User,
    isAuth:boolean,
    confirmedEmail:boolean
}