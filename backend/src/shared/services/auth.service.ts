import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";
import bcrypt from "bcrypt";
import { TokenData } from "../interfaces/token.interface";
import { createToken } from "./token.service";

export const addUser = async(user:User):Promise<User>=>{
    const userData = user;
    if(await userModel.findOne({email:userData.email}))
        return ;

    const passwordInText = userData.password_hash;
    const hashedPassword = await bcrypt.hash(passwordInText,10);
    user.password_hash = hashedPassword;
    let userEntity = await userModel.create(user);
    return userEntity;
}
export const logInUser = async (user:User): Promise<User> =>{
    const User = await userModel.findOne({email:user.email});
    if(User){
        const isPasswordMatching = await bcrypt.compare(user.password_hash, User.password_hash );
        if(isPasswordMatching){
            return User;
        }
    }
    return ;
}
export const createCookie = (tokenData:TokenData)=>{
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
}