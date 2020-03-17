import { Role } from "../enums/role.enum";

export interface TokenData{
    token:string;
    expiresIn:number;
}
export interface DataStoredInToken{
    userId:string,
    role:Role
}