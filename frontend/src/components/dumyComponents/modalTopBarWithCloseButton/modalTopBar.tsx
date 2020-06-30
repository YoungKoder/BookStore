import React from "react";

import "./modalTopBar.scss";
// import 'font-awesome/css/font-awesome.min.css';

interface OwnProps{
    closeModal: ()=>void
}

export const ModalTopBar: React.FC<OwnProps> = ({closeModal})=>{
    return(
        <>
            <div className="modal__topBar">
               <i onClick={()=>closeModal()} className="fa fa-times"></i>
            </div>
        </>
    )
}