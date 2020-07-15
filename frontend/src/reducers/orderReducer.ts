import { OrderState } from "../types/stateTypes/OrderState";
import { OrderActionTypes } from "../types/actionTypes/actionCreators.types";

const orderState:OrderState={
    orderItems:[]
}

const reduce = (state:OrderState = orderState, action:OrderActionTypes):OrderState=>{
    switch(action.type){
        case 'ADD_ORDER_ITEM':
            return{
                ...state,
                orderItems:[...state.orderItems, action.orderItem]
            }
        default:    
            return state;
    }
}
export default reduce;