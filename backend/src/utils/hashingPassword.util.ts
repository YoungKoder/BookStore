import bcrypt from "bcrypt";
import { User } from "../shared/interfaces/entityInnerfaces/user.interface";

export async function getHashPassword (user:User, _password:string): Promise<User>{
    let resHashCode:string;
    user.password_hash = await bcrypt.hash(_password, 10)
    return user;
    //return JSON.stringify(resHashCode);
}

