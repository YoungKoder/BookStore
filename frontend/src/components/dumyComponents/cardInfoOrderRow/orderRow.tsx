import React, { useState, useEffect } from "react";

import "./orderRow.scss";
import { Button } from "../button/button";
import { OrderItem } from "../../../types/stateTypes/OrderState";
import { prependOnceListener } from "process";

interface OwnProps{
    basePrice?:number
    dispatchAction:(orderItem:OrderItem)=>void
    title?:string
}
export const OrderRow:React.FC<OwnProps> = ({basePrice,dispatchAction,title}:OwnProps)=>{
    const [amount, setAmount] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>();
    const price= typeof basePrice === 'number'?basePrice:1;

    const setAmountAndTotalPrice = (am:any)=>{
        setAmount(am);
    }
 
    useEffect(()=>{
        setTotalPrice(price*amount);
    })

    const addOrderItem = ()=>{
        dispatchAction({titlePrEd:title, amount, totalPrice})
    }
    return (
        <>
            <div className="cardInfo__orderRow d-flex">
                <div className="amount d-flex">
                    <span>Qty:</span>
                    <p className="amount_Select">
                        <select onChange={(e:any)=>setAmountAndTotalPrice(e.target.value)} size={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </p>
                    <div className="amount_FinalpPrice">
                        {totalPrice? totalPrice: basePrice}
                    </div>
                </div>
                
            </div>
            <Button onClick={addOrderItem} type="button" style="darken">Add to cart</Button>
        </>
    )
}