import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";
import bcrypt from "bcrypt";

export const addUser = async(user:User):Promise<User|Boolean>=>{
    const userData = user;
    if(await userModel.findOne({email:userData.email}))
        return false;

    const passwordInText = userData.password_hash;
    const hashedPassword = await bcrypt.hash(passwordInText,10);
    user.password_hash = hashedPassword;
    userModel.create(user);
    return user;
}
export const logInUser = async (user:User): Promise<User | Boolean> =>{
    const User = await userModel.findOne({email:user.email});
    if(User){
        const isPasswordMatching = await bcrypt.compare(user.password_hash, User.password_hash );
        if(isPasswordMatching){
            return User;
        }
    }
    return false;
}