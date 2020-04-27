import React, { ReactNode }  from "react";

interface OwnProps{
    trigger:ReactNode,
    showModal:()=>void
}
export const ModalTrigger:React.FC<OwnProps> = ({trigger,showModal}:OwnProps)=>{
    return(
        <div onClick={showModal}>{trigger}</div>
    )
}