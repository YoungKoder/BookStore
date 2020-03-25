import authorModel from "../../dataAccess/entityModels/author.model";
import { Author } from "../interfaces/entityInnerfaces/authors.interface";
// import { Mongoose } from "mongoose";
import mongoose, { Schema } from 'mongoose';

export const getAllAuthors = async():Promise<Author[]>=>{
    return authorModel.find();
}
export const findAuthorById = async(id:string):Promise<Author> =>{
    return authorModel.findById(id);
}
export const addNewAuthor = async(author:Author):Promise<Author>=>{
    const authorEntity = await authorModel.create(author);
    return authorEntity;
}
export const deleteAuthor = async (id:string):Promise<Author>=>{
    const authorData = await findAuthorById(id);
    authorData.removed_at = true;
    const authorEntity = await authorModel.create(authorData);
    return authorEntity;
}
export const modifyAuthorData = async (id:string, author:Author):Promise<Author>=>{
    const authorEntity = await authorModel.findByIdAndUpdate(id,author);
    return authorEntity;
}
