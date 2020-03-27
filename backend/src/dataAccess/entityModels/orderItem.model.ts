import mongoose,{ Schema } from "mongoose";
import { Currency } from "../../shared/enums/curency.enum";
import { OrderItem } from "../../shared/interfaces/entityInnerfaces/order-item.interface";

const orderItemSchema: Schema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:Currency,
        default:1
    },
    printingEdition:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PrintingEdition',
        required:true
    },
    count:{
        type:Number,
        required:true
    }
});
const orderItem = mongoose.model<OrderItem>('orderItem',orderItemSchema);
export default orderItem;