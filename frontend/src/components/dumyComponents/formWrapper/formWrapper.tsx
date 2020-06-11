import React, { Children, ReactNode } from "react";

import "./form.scss";
import fakeUser from "../../../assets/images/User.png"; 

interface OwnProps{
    isAuth:boolean
    children:{
        content:ReactNode
    }
}
export const FormWrapper:React.FC<OwnProps> = ({isAuth,children}:OwnProps)=> {
    return(
        <>
            <div className="formOuter">
                <div className="formOuter_fakeUserLogo">
                    {isAuth && <img src={fakeUser} alt="fake logo user"></img>}  
                </div>
                  
                {children.content}
            </div>
        </>
    )
}