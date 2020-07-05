import { ModalsState } from "../types/Modals";
import { ModalActionTypes } from "../types/actionTypes/actionCreators.types";

const modals:ModalsState = {
    modal:[],
}

const reduce = (state:ModalsState = modals, action:ModalActionTypes):ModalsState =>{
    switch(action.type){
        case 'OPEN_MODAL':
            if(state.modal.length>1){
                return{
                    ...state,
                    modal:[...state.modal,state.modal[0]=action.modal]
                }
            }else{
                return{
                    ...state,
                    modal:[...state.modal,action.modal],
                }
            }
        case 'CLOSE_MODAL':
            return{
                ...state,
                modal:[]
            }
        default:
            return state;
    }
}

export default reduce;