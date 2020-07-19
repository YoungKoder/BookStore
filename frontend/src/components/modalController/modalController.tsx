import React, { ReactElement, useEffect } from "react";
import { ModalsState } from "../../types/stateTypes/Modals";
import { ModalTopBar } from "../dumyComponents/modalTopBarWithCloseButton/modalTopBar";
import Modal from "react-modal"
import  SignInForm from "../auth/signInForm";
import { RootState } from "../../store";
import { closeModal, modalOpen } from "../../actions/modalsActions/modal.action";
import { connect } from "react-redux";
import { Cart } from "../cart/cart";

interface OwnProps{
    authForm?:boolean
}

interface DispatchProps{
    openModal:(item:Object)=>void
    closeModal:()=>void
}

interface StateProps{
    modal:ModalsState
}

type Props = StateProps & DispatchProps &OwnProps;
const ModalController:React.SFC<Props> = (props:Props)=>{
    Modal.setAppElement("#root");
    // props.authForm ===undefined? props.authForm=true: props.authForm = props.authForm;
    return(
        <>
            {props.modal.modal.length>0? props.modal.modal.map((item,i)=><Modal
            isOpen={props.modal.modal? true:false}
            onRequestClose={props.closeModal}
            className="Modal"
            key={i}
        >
            {item.content }
        </Modal>) : null }
        </>
    )
}

const mapStateToProps = (state:RootState):StateProps=>{
    return{
        modal:state.modal
    }
}

const mapDispatchToProps = (dispatch:any):DispatchProps=>{
    return{
        openModal: (item) => {
            dispatch(modalOpen(item))
        },
        closeModal: ()=>{
            dispatch(closeModal())
        }
    }
}


export default connect<StateProps, DispatchProps,OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(ModalController)