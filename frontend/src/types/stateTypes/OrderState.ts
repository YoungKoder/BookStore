export interface OrderState{
    orderItems:Array<OrderItem>,
}
export interface OrderItem{    
    titlePrEd?:string,
    amount:number,
    totalPrice?:number
}