import React, { useEffect, useState } from "react";
import { PrintingEdition } from "../../types/printingEdition";
import { printingEditionsService } from "../../services/printingEditionsService";
import { OrderRow } from "../dumyComponents/cardInfoOrderRow/orderRow";

import "./editionCardInfo.scss";
import { Dispatch } from "redux";
import { OrderItem } from "../../types/stateTypes/OrderState";
import { addOrderItem } from "../../actions/orderActions/orderActions";
import { connect, useDispatch } from "react-redux";

interface OwnProps{
    matchedId:string
}
interface DispatchProps{
    // addOrderItem:(itemOrder:OrderItem)=>void
}

type Props = DispatchProps & OwnProps;

export const EditionCardInfo:React.FC<Props> = (props:Props)=>{

    const dispatch = useDispatch();

    const [curentEdition, setCurrentEdition] = useState<PrintingEdition>();
    useEffect(()=>{
        printingEditionsService.getEdition(props.matchedId)
        .then(res=>setCurrentEdition(res));
    },[]);

    const addOrderItemDispatch = (orderItem:OrderItem)=>{
        dispatch(addOrderItem(orderItem))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="cardInfo_head d-flex align-items-center">
                    <div className="cardInfo_image col-6">
                        {/* <img src={curentEdition?.cover_image} alt="card_image"/> */}
                    </div>
                    <div className="cardInfo_rightPart">
                        <div className="cardInfo__title">
                            <h2>{curentEdition?.title}</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="cardInfo_author">
                            {curentEdition?.author_ids.map((author)=>{
                                return <p>{author.name}</p>
                            })}
                        </div>
                        <OrderRow  title={curentEdition?.title} dispatchAction={addOrderItemDispatch} basePrice={curentEdition?.price}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="cardInfo_description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, optio.
                    </p>
                </div>
            </div>
        </div>
    )
}