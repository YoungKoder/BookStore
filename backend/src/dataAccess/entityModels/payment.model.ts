import mongoose,{ Schema } from "mongoose"
import { Payment } from "../../shared/interfaces/entityInnerfaces/payment.interface"
import orderModel from "./order.model"

const paymantSchema = new Schema({
    transactionId:{
        type:String
    }
})
const paymantModel = mongoose.model<Payment>('Payment', paymantSchema)
export default paymantModel;