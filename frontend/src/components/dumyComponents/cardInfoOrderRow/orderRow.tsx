import React, { useState } from "react";

import "./orderRow.scss";

interface OwnProps{
    basePrice?:number
}
export const OrderRow:React.FC<OwnProps> = ({basePrice}:OwnProps)=>{
    const [amount, setAmount] = useState<number>(1)
    const price = typeof basePrice === 'number'?basePrice:1
    return (
        <>
            <div className="cardInfo__orderRow d-flex">
                <div className="amount d-flex">
                    <span>Qty:</span>
                    <p className="amount_Select">
                        <select onChange={(e:any)=>setAmount(e.target.value)} size={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </p>
                    <div className="amount_FinalpPrice">
                        {Math.floor(price * amount)}
                    </div>
                </div>
                
            </div>
            <button className="addToCart">Add to cart</button>
        </>
    )
}