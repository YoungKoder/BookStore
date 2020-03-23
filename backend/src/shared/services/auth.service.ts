import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";
import bcrypt from "bcrypt";
import { TokenData } from "../interfaces/token.interface";
import { createToken } from "./token.service";
import { createUser } from "../repositories/auth.repositoriy";
import { sendMail } from "../../utils/nodemailer.utils";

export const addUser = async(user:User):Promise<User>=>{
    const userData = user;
    if(await userModel.findOne({email:userData.email}))
        return ;
    console.log(userData)
    const passwordInText = userData.password_hash;
    const hashedPassword = await bcrypt.hash(passwordInText,10);
    user.password_hash = hashedPassword;
    
    let userEntity = await createUser(user);
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