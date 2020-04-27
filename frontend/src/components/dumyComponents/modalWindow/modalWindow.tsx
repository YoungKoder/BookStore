import React, { ReactNode, useState } from "react";

import "./modalWindow.scss";
import { ModalTrigger } from "./modalTrigger";
import { ModalContent } from "./modalWindowContent";

interface OwnProps{
    children:{
        trigger:ReactNode,
        content:ReactNode
    }
}
export const Modal:React.FC<OwnProps> = ({children}:OwnProps)=>{
    const [isVisible, setVisible] = useState<boolean>(false);
    const onClickTriggerButton = () =>{
        setVisible(true);
    }
    const closeModal = ()=>{
        setVisible(false);
    }
    const onKeyDown = (e:React.KeyboardEvent) =>{
        if(e.keyCode == 27){
            closeModal()
        }
    }
    return(
        <>
            <ModalTrigger showModal={onClickTriggerButton} trigger={children.trigger}/>
            {isVisible && <ModalContent 
                onKeyDown={onKeyDown}  
                closeModal={closeModal} 
                content={children.content}/>}
        </>
    )
}