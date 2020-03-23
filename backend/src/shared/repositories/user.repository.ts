import { User } from "../interfaces/entityInnerfaces/user.interface";
import userModel from "../../dataAccess/entityModels/user.model";

export const findUserAndUpdate = async(id:string, userNewData:User):Promise<User>=>{
    const newUserEntity = await userModel.findByIdAndUpdate(id,userNewData, {new:true});
    return newUserEntity;
}
export const getAllUsers = async():Promise<User[]>=>{
    console.log("HERE");
    return userModel.find();
}
export const findUserById = async(id:string):Promise<User>=>{
    return userModel.findById(id);
}