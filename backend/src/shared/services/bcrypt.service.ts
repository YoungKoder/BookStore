import bcrypt from "bcrypt";
import { User } from "../interfaces/entityInnerfaces/user.interface";
// import {getHashPassword} from "../../utils/hashingPassword.util";

export async function getHashPassword(user:User):Promise<User>{
    const passwordInText = user.password_hash;
    const hashedPassword = await bcrypt.hash(passwordInText,10);
    user.password_hash = hashedPassword;
    //add to db and get resp
    return user;
}

// async function getUser():Promise<User>{
//     getHashPassword()
//     return
// }
