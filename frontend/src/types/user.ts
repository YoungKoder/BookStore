import { UserRole } from "./enums";

export interface User{
    email:String,
    userName:String,
    first_name:String,
    last_name:String,
    role: UserRole
}