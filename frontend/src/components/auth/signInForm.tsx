import React, { Children } from "react";

import {
    FormikProps,
    Form,
    Field,
    withFormik
} from 'formik';

import * as yup from "yup";
import { SignInUserData, InitialValues } from "../../types/SignUpUserData";
import { authService } from "../../services/authService";

import "./authForm.scss";
import { FormWrapper } from "../dumyComponents/formWrapper/formWrapper";

const SignInInnerForm = (props:FormikProps<SignInUserData>)=>{
    const {touched, errors, isSubmitting} = props;
    return(
        <>
            <FormWrapper isAuth = {true}>
                {
                    {
                        content:
                            <Form className="authFormInner">
                                <Field type="email" name = "email" placeholder="Email"/>
                                {touched.email && errors.email && <div>{errors.email}</div>}
                                <Field type="password" name = "password" placeholder="Password"/>
                                {touched.password && errors.password && <div>{errors.password}</div>}
    
                                <button type="submit" disabled={isSubmitting}>
                                    Sumbit
                                </button>
                            </Form>  
                        
                    }
                }
            </FormWrapper>
        </>
    )
}

export const SignInForm = withFormik<InitialValues,SignInUserData >({
    mapPropsToValues: (props)=>{
        return{
            email:'',
            password:''
        }
    },
    validationSchema: yup.object({
        email: yup.string()
            .email("Invalid email adress")
            .required("Required"),
        password: yup.string()
            .min(6,"password can't be less then 6 characters")
            .required('Password is required')
    }),

    handleSubmit:(values,{setSubmitting})=>{
        console.log(`Values from inputs${values}`);
        try{
            authService.signInUser(values);
            setSubmitting(false);
        }
        catch(error){
            console.log("can't signIn");
        };
        
    }
})(SignInInnerForm);