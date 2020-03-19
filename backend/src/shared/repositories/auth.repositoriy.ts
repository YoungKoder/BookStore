import userModel from "../../dataAccess/entityModels/user.model";
import { User } from "../interfaces/entityInnerfaces/user.interface";

export const createUser = async(user:User):Promise<User>=>{
    const userEntity = await userModel.create(user);
    return userEntity;
}