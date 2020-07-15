import React, { ReactNode } from "react";

import "./button.scss";

interface OwnProps{
    children:String|ReactNode,
    type: ""|"reset"| "button" | "submit",
    onClick:()=>void,
    variant?:"solid"|"outlined",
    size?:"regular"|"long",
    disabled?:boolean,
    style?:"darken"|"orange"
}

export const Button:React.FC<OwnProps> = ({children,type,onClick,variant, style,size,disabled}:OwnProps)=>{
    let className = "";

    type = type===""?"button": type

    variant===undefined? className+="btn--solid ": className+= "btn--"+variant+" ";
    size===undefined? className+="btn--regular " : className+= "btn--"+size+" ";
    style===undefined? className+="btn--orange " : className+= "btn--"+style+" ";

   return (
        <button className={"btn" + " " + className} onClick={onClick} type={type} disabled= { disabled}>
            {children}
        </button>
   )
}