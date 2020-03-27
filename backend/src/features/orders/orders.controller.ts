import * as express from 'express';
import { Controller } from '../../shared/interfaces/controller.interface';
import { authMiddleware } from '../../shared/middleware/auth.middleware';
import { checkRoleMiddleware } from '../../shared/middleware/checkRole.middleware';
import { OrderItem } from '../../shared/interfaces/entityInnerfaces/order-item.interface';
import { createOrderItem, createOrder, findAllOrdersOfOneUser, deleteOrder, findAllOrders } from '../../shared/repositories/order.repository';
import { stickUserToRequestMiddleware } from '../../shared/middleware/stickUserToRequest.middleware';
import { requestWithUser } from '../../shared/interfaces/requestWithUser.interface';
import { findUserById } from '../../shared/repositories/user.repository';

export class OrderController implements Controller{
    public path = '/order';
    public router = express.Router();
    private orderItem:OrderItem;

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router
            .all(`${this.path}/*`, authMiddleware, stickUserToRequestMiddleware)
            .post(`${this.path}/fillOrder`, this.addOrderItems)
            .post(`${this.path}/fillOrder/makeOrder`, this.makeOrder)
            .get(`${this.path}/myOrders`, this.showOrders)
            .delete(`${this.path}/myOrders/:id`, this.deleteOrder);
        this.router
            .all(`${this.path}/*`, authMiddleware, checkRoleMiddleware)
            .get(`${this.path}/getAllOrders`, this.getAllOrders);    
    }

    private addOrderItems = async(req:express.Request,res:express.Response)=>{
        const orderItem = req.body;
        const orderItemEntity = await createOrderItem(orderItem);
        this.orderItem = orderItemEntity;
        await orderItemEntity.populate('printingEdition','title').execPopulate();
        res.send(orderItemEntity);
    }
    private makeOrder = async(req:requestWithUser,res:express.Response)=>{
        const orderData = {
            ...req.body,
            user:req.user.id
        };
        const orderEntity = await createOrder(orderData);
        await orderEntity.populate('user', 'userName').execPopulate();
        res.send(orderEntity);
    }
    private showOrders = async (req:requestWithUser,res:express.Response)=>{
        const userOrdersEntity = await findAllOrdersOfOneUser(req.user.id);
        for(let i=0;i<userOrdersEntity.length;i++){
            await userOrdersEntity[i].populate('user','userName').execPopulate()
            await userOrdersEntity[i].populate('orderItems').execPopulate() 
            res.send(userOrdersEntity[i]);
        }
    }
    private deleteOrder = async(req:express.Request, res:express.Response)=>{
        const id = req.params.id;
        const deletedOrderEntity = await deleteOrder(id);
        res.send(deletedOrderEntity);
    }
    private getAllOrders = async(req:express.Request, res:express.Response)=>{
        const ordersEntitites = await findAllOrders();
        for(let i=0;i<ordersEntitites.length;i++){
            await ordersEntitites[i].populate('user','userName').execPopulate()
            await ordersEntitites[i].populate('orderItems','count').execPopulate() 
            res.send(ordersEntitites[i]);
        }
    }

}