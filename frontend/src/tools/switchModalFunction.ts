import { useDispatch } from "react-redux";
import { closeModal, modalOpen } from "../actions/modalsActions/modal.action";
import { Dispatch } from "react";

export const switchModal=(dispatch:Dispatch<{}>,objOfModal:Object)=>{
    dispatch(closeModal())
    dispatch(modalOpen(objOfModal));
}
