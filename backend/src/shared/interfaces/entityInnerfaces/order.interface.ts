import { User } from './user.interface';
import {Document} from 'mongoose';
import mongoose from 'mongoose';
import { OrderItem } from './order-item.interface';
import { Payment } from './payment.interface';

export interface Order extends Document{
    user: User,
    description: string,
    date: Date,
    orderItems: Array<OrderItem>,
    payment: Payment
}