import { DataStoredInToken } from "../shared/interfaces/token.interface";

export const getTokenFromHeader = async(header:String):Promise<string>=>{
    const bearer = header.split(" ");
    const token = bearer[1];
    return token;
}

