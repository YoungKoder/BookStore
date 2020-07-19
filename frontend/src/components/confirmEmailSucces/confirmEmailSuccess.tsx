import React, { Dispatch, useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { modalOpen } from "../../actions/modalsActions/modal.action";
import { FormWrapper } from "../dumyComponents/formWrapper/formWrapper";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { ModalTopBar } from "../dumyComponents/modalTopBarWithCloseButton/modalTopBar";
import PrintingEditionList  from '../printingEditionList/printingEditionList';
import store, { RootState } from "../../store";
import { User } from "../../types/user";
import { UserState } from "../../types/stateTypes/userState";
import { Button } from "../dumyComponents/button/button";

import "./confirmEmailSuccess.scss";
import { loadUserFromLs } from "../../tools/savingStoreToLs";
interface OwnProps{

}
interface StateProps{
    user:User
}
interface DispathcProps{

}
type Props = StateProps & OwnProps & DispathcProps;

const SuccesConfirmEmail:React.SFC<Props> = (props:Props)=>{
    const [doesModalOpen,setModalOpen] = useState<boolean>(true);
    const [user, setUser] = useState<User>();
    const history = useHistory();
    
    const closeModal = ()=>{
        setModalOpen(false);
        history.push("/");
    }
    useEffect(()=>{
        // console.log(`>>>user in state ${store.getState().user.user.first_name}`);
        // console.log(`>>>User:${props.user.first_name}`)
        setUser(loadUserFromLs());
    },[])
    return(
        <>
            <PrintingEditionList/>
            <Modal 
                isOpen={doesModalOpen}
                onRequestClose={closeModal}
                className="Modal">
                    <ModalTopBar closeModal={closeModal}/>
                    <FormWrapper isAuth={false} title={<i className="fa fa-check" aria-hidden="true"></i>}>
                        {
                            {
                                content: <div className="confirmEmailSuccess" >
                                    <div className="confirmEmailSuccess_text">
                                        <p>Dear new {user?.first_name} {user?.last_name},</p> 
                                        <p>thank you for your registration</p>
                                    </div>
                                        
                                        <Button type={""} onClick={closeModal} size={"long"} >  {"Continue"}</Button>
                                    </div>
                            }
                        }
                    </FormWrapper>
            </Modal>
        </>
        
    )
}
const mapStateToProps = (state:RootState):StateProps=>{
    return{
        user:state.user.user
    }
}
export default connect<StateProps,any,any,any>(mapStateToProps)(SuccesConfirmEmail)