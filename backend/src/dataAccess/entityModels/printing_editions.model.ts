import mongoose, { Schema } from 'mongoose';
import { PrintingEditions } from '../entityInnerfaces/printing_editions.interface';

const printingEditions: Schema = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description:{
        type: String,
        required: true 
    }, 
    cover_image: { 
        type: String, 
        required: true 
    },
    removed_at: { 
        type: Date, 
        required: true 
    },
    type:{
        type: String, 
        required: true
    },
    currency:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required: true
    }
});

const printingEditionsModel = mongoose.model<PrintingEditions>('PrintingEditions', printingEditions);
export default printingEditionsModel;