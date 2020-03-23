import { User } from "../interfaces/entityInnerfaces/user.interface";
import { findUserAndUpdate, findUserById } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { runInNewContext } from "vm";

export const editPassword = async(oldPassword:string, newPassword:string, user:User):Promise<User>=>{
    const id = user.id;
    const userEntity = user;
    
    const doesPasswordsTheSame = await bcrypt.compare(oldPassword,userEntity.password_hash);
    if (doesPasswordsTheSame){
        const hashedNewPassword = await bcrypt.hash(newPassword,10);
        userEntity.password_hash = hashedNewPassword;   
    }else{
        return;
    }

    const userEntityWithNewPassword = findUserAndUpdate(id,userEntity);
    return userEntityWithNewPassword;
}
export const deleteUser = async(id:string):Promise<User>=>{
    const userData = await findUserById(id);
    userData.removed_at = true;
    const userEntity = await findUserAndUpdate(id,userData);
    return userEntity;
}