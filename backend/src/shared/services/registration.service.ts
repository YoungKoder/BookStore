import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";
import bcrypt from "bcrypt";

export const doesUserAlreadyExist = async(user:User):Promise<Boolean>=>{
    const userData = user;
    if(await userModel.findOne({email:userData.email}))
        return true;
    return false;
}

export const addUser = async(user:User):Promise<User>=>{
    const passwordInText = user.password_hash;
    const hashedPassword = await bcrypt.hash(passwordInText,10);
    user.password_hash = hashedPassword;
    userModel.create(user);
    return user;
}
