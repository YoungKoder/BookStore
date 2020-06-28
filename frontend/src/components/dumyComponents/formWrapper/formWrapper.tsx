import React, { Children, ReactNode } from "react";

import "./form.scss";
import fakeUser from "../../../assets/images/User.png"; 

interface OwnProps{
    isAuth:boolean;
    title:String;
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
                    <p className="formOuter__title">{title}</p>
                </div>}
                  
                {children.content}
            </div>
        </>
    )
}