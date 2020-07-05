import { OpenModal, CloseModal } from "../../types/actionTypes/actionCreators.types";

export const modalOpen = (modal:Object):OpenModal=>{
    return{
        type:"OPEN_MODAL",
        modal
    }
}

export const closeModal = ():CloseModal =>{
    return{
        type:"CLOSE_MODAL",
        modal:{}
    }
}