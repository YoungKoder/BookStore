import { Order } from './../../shared/interfaces/entityInnerfaces/order.interface';
import { User } from './../../shared/interfaces/entityInnerfaces/user.interface';
import mongoose, { Schema } from 'mongoose';
import userModel from './user.model';

const OrderScheme:Schema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderItem',
        reguired:true
    }],
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payment'
    },
    removed_at:{
        type:Boolean,
        default:false
    }
})

const orderModel = mongoose.model<Order>('Order', OrderScheme);
export default orderModel;

