import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";
import bcrypt from "bcrypt";
import { TokenData } from "../interfaces/token.interface";
import { createToken } from "./token.service";
import { createUser } from "../repositories/auth.repositoriy";
import { sendMail } from "../../utils/nodemailer.utils";
import { randomBytes } from "crypto";

export const addUser = async(user:User):Promise<User>=>{
    const userData = user;
    if(await userModel.findOne({email:userData.email}))
        return ;
    console.log(`user data ${userData}`)
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

export const recoverPassword = async (email:String):Promise<String>=>{
    const User = await userModel.findOne({email:email});
    if(User){
        const randomPass = randomBytes(20).toString('hex');
        User.password_hash = await bcrypt.hash(randomPass,10);
        return randomPass
    }return;
}