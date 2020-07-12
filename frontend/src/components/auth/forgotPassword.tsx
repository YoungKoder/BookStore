import React, { Dispatch } from "react";

import {
    FormikProps,
    Form,
    Field,
    withFormik
} from 'formik';

import * as yup from "yup";
import { RecoverPasswordData } from "../../types/SignUpUserData";
import { FormWrapper } from "../dumyComponents/formWrapper/formWrapper";
import { spawn } from "child_process";
import { Button } from "../dumyComponents/button/button";

import "./authForm.scss";
import { authService } from "../../services/authService";
import { RootState } from "../../store";
import { confirmEmail } from "../../actions/userActions/userAction";
import { connect } from "react-redux";
import { closeModal, modalOpen } from "../../actions/modalsActions/modal.action";
import { PasswordAssistanceConfirmationMessage } from "../dumyComponents/passwordAssistanceConfirm/passwordAssistanceConfirmation";

interface ForgotPasswordFormProps{
 
}

interface StateProps{
    confirmedEmail:boolean
}

interface Dispatchprops{
    confirmEmail: (confirm:boolean)=>void,
    switchModal:(newModal:Object)=>void
}
type Props = StateProps & Dispatchprops & ForgotPasswordFormProps 

const ForgotPasswordInnerForm = (props:Props & FormikProps<RecoverPasswordData>)=>{
    const {touched, errors, isSubmitting} = props;
    return(
        <>
            <FormWrapper isAuth={true} title="Password assistance">
                {
                    {
                        content:
                        <div className="passwordAssistance">
                                {props.confirmedEmail===true? 
                                <div className="passwordAssistance_errorMessage">
                                    <p className="passwordAssistance_errorMessage__title">There was a problem</p>
                                    <p className="passwordAssistance_errorMessage__text">We weren't able to identify you given the information provided</p>
                               </div> :null}
                               <div className="passwordAssistance_content">
                                    <p>Enter the email address associated with your account</p>
                                    <Form className="authFormInner">
                                        <label htmlFor="emailPasswordAssistance">Email</label>
                                        <div className="fieldWrapper">
                                            <Field id="emailPasswordAssistance" type="email" name="emailPasswordAssistance"
                                            placeholder="Email"/>
                                            {touched.emailPasswordAssistance && errors.emailPasswordAssistance && <span className="errorMessage">{errors.emailPasswordAssistance}</span>}
                                        </div>
                                        <div className="passwordAssistance_confirmEmailBtn">
                                            <Button type="submit" size="long" onClick={()=>console.log()}>Continue</Button>
                                        </div>
                                    </Form>
                                    
                               </div>
                            
                        </div>
                    }
                }
            </FormWrapper>
        </>
    )
}

const ForgotPasswordForm = withFormik<Props, RecoverPasswordData>({
    mapPropsToValues: (props)=>{
        return{
            emailPasswordAssistance:''
        }
    },
    validationSchema: yup.object({
        emailPasswordAssistance:yup.string()
            .email("Invalid email adress")
            .required("Required")
    }),
    handleSubmit:async (values,{props,setSubmitting})=>{
        try{
            console.log(`Value email: ${values.emailPasswordAssistance}`)
            await authService.passwordAssistance(values.emailPasswordAssistance);
            props.confirmEmail(true)
            props.switchModal({content:<PasswordAssistanceConfirmationMessage/>})
            setSubmitting(false);
        }catch{
            props.confirmEmail(false)
        }
    }

})(ForgotPasswordInnerForm)

const mapStateToProps = (state:RootState):StateProps=>{
    return{
        confirmedEmail:state.user.confirmedEmail
    }
}

const mapDispatchToProps = (dispatch:any):Dispatchprops=>{
    return{
        confirmEmail: (confirm:boolean)=>{
            dispatch(confirmEmail(confirm))
        },
        switchModal: (modal:Object)=>{
            dispatch(closeModal())
            dispatch(modalOpen(modal))
        }
    }
}

export default connect<StateProps,Dispatchprops,ForgotPasswordFormProps,RootState>(mapStateToProps,mapDispatchToProps)(ForgotPasswordForm)