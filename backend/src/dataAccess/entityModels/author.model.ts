import mongoose, { Schema } from 'mongoose';
import { Author } from '../entityInnerfaces/authors.interface';

const AuthorScheme: Schema = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    }
});

const authorModel = mongoose.model<Author>('User', AuthorScheme);
export default authorModel;