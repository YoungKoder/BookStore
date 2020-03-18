import mongoose, { Schema } from 'mongoose';
import { PrintingEdition } from '../../shared/interfaces/entityInnerfaces/printing_editions.interface';
import { PrintingEditionType } from '../../shared/enums/printingEditionType.enum';

const printingEdition: Schema = new Schema({
    title: { 
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: true 
    }, 
    cover_image: { 
        type: String
    },
    removed_at: { 
        type: Boolean, 
        default:false
    },
    type:{
        type: PrintingEditionType, 
        required: true
    },
    currency:{
        type: String,
        default:'USD'
    },
    price:{
        type:Number,
        required: true,
    },
    author_ids:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Author', 
        required:false
    }]
});

const printingEditionModel = mongoose.model<PrintingEdition>('PrintingEdition', printingEdition);
export default printingEditionModel;