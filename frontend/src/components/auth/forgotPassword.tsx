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

interface ForgotPasswordFormProps{

}

const ForgotPasswordInnerForm = (props:ForgotPasswordFormProps & FormikProps<RecoverPasswordData>)=>{
    const {touched, errors, isSubmitting} = props;
    return(
        <>
            <FormWrapper isAuth={true} title="Password assistance">
                {
                    {
                        content:
                        <div className="passwordAssistance">
                            <p>Enter the email address associated with your account</p>
                            <Form className="authFormInner">
                                <label htmlFor="email">Email</label>
                                <div className="fieldWrapper">
                                    <Field id="email" type="email" 
                                    placeholder="Email"/>
                                    {touched.email && errors.email && <span className="errorMessage">{errors.email}</span>}
                                </div>
                            </Form>
                        </div>
                    }
                }
            </FormWrapper>
        </>
    )
}

const ForgotPasswordForm = withFormik<ForgotPasswordFormProps, RecoverPasswordData>({
    mapPropsToValues: (props)=>{
        return{
            email:''
        }
    },
    validationSchema: yup.object({
        email:yup.string()
            .email("Invalid email adress")
            .required("Required")
    }),
    handleSubmit:async (values,{props,setSubmitting})=>{
        try{
            setSubmitting(false);
        }catch{
            console.log("")
        }
    }

})