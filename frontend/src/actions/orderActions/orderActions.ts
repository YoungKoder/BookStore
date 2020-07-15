import { AddOrderItem } from "../../types/actionTypes/actionCreators.types"
import { OrderItem } from "../../types/stateTypes/OrderState"

export const addOrderItem = (orderItem:OrderItem):AddOrderItem=>{
    return{
        type:'ADD_ORDER_ITEM',
        orderItem
    }
}