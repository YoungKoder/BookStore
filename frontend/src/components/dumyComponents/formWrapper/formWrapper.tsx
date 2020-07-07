import React, { Children, ReactNode } from "react";

import "./form.scss";
import fakeUser from "../../../assets/images/User.png"; 

interface OwnProps{
    isAuth:boolean;
    title:String|ReactNode;
    children:{
        content:ReactNode
    }
}
export const FormWrapper:React.FC<OwnProps> = ({isAuth,title,children}:OwnProps)=> {
    return(
        <>
            <div className="formOuter">
                {isAuth && <div className="formOuter_header">
                    <div className="userLogo" >
                        <img src={fakeUser} alt="fake logo user"></img>
                    </div>
                </div>}
                <p className="formOuter__title" style={{textAlign:"center"}}>{title}</p>
                {children.content}
            </div>
        </>
    )
}