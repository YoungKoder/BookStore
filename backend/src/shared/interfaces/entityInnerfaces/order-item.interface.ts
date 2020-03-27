import { PrintingEdition } from './printing_editions.interface';
import { Currency } from '../../enums/curency.enum';
import {Document} from 'mongoose';
export interface OrderItem extends Document{
    amount: number,
    currency:Currency,
    printingEdition: PrintingEdition,
    count: number
}