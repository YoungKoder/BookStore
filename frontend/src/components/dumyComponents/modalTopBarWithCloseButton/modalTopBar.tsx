import React from "react";

import "./modalTopBar.scss";
import { useDispatch } from "react-redux";
// import 'font-awesome/css/font-awesome.min.css';

interface OwnProps{
    closeModal: ()=>void
}

export const ModalTopBar: React.FC<OwnProps> = ({closeModal})=>{
    const dispatch = useDispatch();
    return(
        <>
            <div className="modal__topBar">
               <i onClick={()=>dispatch(closeModal())} className="fa fa-times"></i>
            </div>
        </>
    )
}