import { Order } from './../../shared/interfaces/entityInnerfaces/order.interface';
import { User } from './../../shared/interfaces/entityInnerfaces/user.interface';
import mongoose, { Schema } from 'mongoose';
import userModel from './user.model';

const OrderScheme:Schema = new Schema({
    user:{
        required:true,
        type: userModel
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    orderItems:{
        type:Array,
        reguired:true
    },
    payment:{
        type:String
    }
})

const orderModel = mongoose.model<Order>('Order', OrderScheme);
export default orderModel;

