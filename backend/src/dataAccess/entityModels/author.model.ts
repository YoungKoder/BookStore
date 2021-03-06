import mongoose, { Schema } from 'mongoose';
import { Author } from '../../shared/interfaces/entityInnerfaces/authors.interface';

const AuthorScheme: Schema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    removed_at: { 
        type: Boolean, 
        default:false
    },
    product_ids:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'PrintingEdition', 
        required:true
    }]

});

const authorModel = mongoose.model<Author>('Author', AuthorScheme);
export default authorModel;