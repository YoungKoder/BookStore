import {Document} from 'mongoose';
import mongoose from 'mongoose';
import { PrintingEditionType } from '../../enums/printingEditionType.enum';

export interface PrintingEdition extends Document{
    title:string,
    description: string,
    cover_image?: string,
    removed_at?: Boolean,
    type: PrintingEditionType,
    price: number,
    currency: string,
    author_ids: mongoose.Schema.Types.ObjectId
}