import {Document} from 'mongoose';
export interface Payment extends Document {
    transactionId: string
}