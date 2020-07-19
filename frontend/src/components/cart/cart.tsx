import React from "react";

import "./cart.scss";
import { FormWrapper } from "../dumyComponents/formWrapper/formWrapper";

interface OwnProps{

}
interface StateProps{

}
interface DispatchProps{

}

type Props = StateProps & DispatchProps & OwnProps;
export const Cart:React.SFC<{}> = ()=>{
    return(
        <>
            <div className="cart_wrapper">
                <div className="cart_header">
                    <div className="header_stroke">
                        <div className="container col-10">
                            <div className="row justify-content-between">
                                <p className="stroke_title">Product</p>
                                <div className="stroke_subTitles d-flex col-5 justify-content-between">
                                    <span>Unit price</span>
                                    <span>Qty</span>
                                    <span>Order Amount</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>      
        </>
    )

}