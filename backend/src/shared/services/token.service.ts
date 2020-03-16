import { User } from "../interfaces/entityInnerfaces/user.interface";
import { TokenData, DataStoredInToken } from "../interfaces/token.interface";
import jwt from "jsonwebtoken";
import userModel from "../../dataAccess/entityModels/user.model";

export const createToken = async (user :User): Promise<TokenData>=>{
    const expiresIn = 60*60;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken:DataStoredInToken = {
        userId: user._id,
        role:user.role
    };
    return{
        token: jwt.sign(dataStoredInToken,secret, {expiresIn}),
        expiresIn 
    }
}