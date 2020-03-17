import {Document} from 'mongoose';
import mongoose from 'mongoose';
import { PrintingEditionType } from '../../enums/printingEditionType.enum';
import { Currency } from '../../enums/curency.enum';

export interface PrintingEdition extends Document{
    title:string,
    description: string,
    cover_image?: string,
    removed_at?: Boolean,
    type: PrintingEditionType,
    price: number,
    currency: Currency,
    author_ids: mongoose.Schema.Types.ObjectId
}