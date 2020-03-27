import { OrderItem } from "../interfaces/entityInnerfaces/order-item.interface";
import orderItem from "../../dataAccess/entityModels/orderItem.model";
import { Order } from "../interfaces/entityInnerfaces/order.interface";
import orderModel from "../../dataAccess/entityModels/order.model";

export const createOrderItem = async(orderItemFromRequest:OrderItem):Promise<OrderItem>=>{
    const orderItemEntity = orderItem.create(orderItemFromRequest);
    return orderItemEntity;
}

export const createOrder = async (orderFromRequest:Order):Promise<Order>=>{
    const orderEntity = orderModel.create(orderFromRequest);
    return orderEntity;   
}

export const findAllOrdersOfOneUser = async (userId:string):Promise<Order[]>=>{
    const userOrders = orderModel.find({user:userId});
    return userOrders;
}

export const findAllOrders = async():Promise<Order[]>=>{
    const allOrdersEntities = orderModel.find();
    return allOrdersEntities;
}

export const deleteOrder = async(orderId:string):Promise<Order>=>{
    const deletedOrderEntity = await orderModel.findById(orderId);
    deletedOrderEntity.removed_at = true;
    return deletedOrderEntity;
}