import { User } from "../shared/interfaces/entityInnerfaces/user.interface";
import jwt from "jsonwebtoken";
import { DataStoredInToken } from "../shared/interfaces/token.interface";
import userModel from "../dataAccess/entityModels/user.model";


export const getUserFromToken = async(token:string):Promise<User>=>{
    const secret = process.env.JWT_SECRET;
    const verificationResponse =jwt.verify( token, secret) as DataStoredInToken;
    const id = verificationResponse.userId;
    const userEntity = await userModel.findById(id);
    return userEntity;
}