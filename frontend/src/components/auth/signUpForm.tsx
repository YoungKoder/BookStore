import React, { Dispatch } from "react";
import {
    FormikProps,
    Form,
    Field,
    withFormik
  } from 'formik';

import * as yup from "yup";
import { SignUpUserData, InitialValues } from "../../types/SignUpUserData";
import { FormWrapper } from "../dumyComponents/formWrapper/formWrapper";
import { authService } from "../../services/authService";
import { Button } from "../dumyComponents/button/button";
import { modalOpen, closeModal } from "../../actions/modalsActions/modal.action";
import  SignInForm  from "./signInForm";
import { useDispatch } from "react-redux";
import { switchModal } from "../../tools/switchModalFunction";
import { ConfirmEmail } from "../dumyComponents/confirmEmailForm/confirmEmailForm";
import { connect } from "react-redux";
import { User } from "../../types/user";
import { signUpUser } from "../../actions/userActions/userAction";
import store from "../../store";
import { ModalTopBar } from "../dumyComponents/modalTopBarWithCloseButton/modalTopBar";
import { savingUserToLocalStorage } from "../../tools/savingStoreToLs";

interface SignUpFormProps{
    switchModal:(obj:Object)=>void,
    signUpUser:(obj:User)=>void
}

const SignUpInnerForm = (props:SignUpFormProps& FormikProps<SignUpUserData>)=>{
    const {touched, errors, isSubmitting} = props;
    const dispatch = useDispatch();
    return(
        <>
            <ModalTopBar closeModal={closeModal}/>
            <FormWrapper isAuth = {true} title="Create Acount">
                {
                    {
                        content:
                        <Form className="authFormInner">
                            <label htmlFor="userName">User Name</label>
                            <div className="fieldWrapper">
                                <Field id="userName" type="userName" name = "userName" placeholder="User Name"/>
                                {touched.userName && errors.userName && <span className="errorMessage">{errors.userName}</span>}
                            </div>

                            <label htmlFor="firstName">Your First Name</label>
                            <div className="fieldWrapper">
                                <Field id="firstName" type="first_name" name = "first_name" placeholder="First name"/>
                                {touched.first_name && errors.first_name && <span className="errorMessage">{errors.first_name}</span>}
                            </div>

                            <label htmlFor="lastName">Your Last Name</label>
                            <div className="fieldWrapper">
                                <Field id="lastName" type="last_name" name = "last_name" placeholder="Last name"/>
                                {touched.last_name && errors.last_name && <span className="errorMessage">{errors.last_name}</span>}
                            </div>

                            <label htmlFor="email">E-mail</label>
                            <div className="fieldWrapper">
                                <Field id="email" type="email" name = "email" placeholder="Email"/>
                                {touched.email && errors.email && <span className="errorMessage">{errors.email}</span>}
                            </div>
                            
                            <label htmlFor="password">Password</label>
                            <div className="fieldWrapper">
                                <Field id="password" type="password" name = "password" placeholder="Password"/>
                                {touched.password && errors.password && <span className="errorMessage">{errors.password}</span>}
                            </div>

                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="fieldWrapper">
                                <Field id="confirmPassword" type="password" name = "confirmPassword" placeholder="Confirm password"/>
                                {touched.confirmPassword && errors.confirmPassword && <span className="errorMessage">{errors.confirmPassword}</span>}
                            </div>
                            
                            <div className="actionWrapper">
                                    <div></div>
                                    <Button type="submit" onClick={()=>console.log()} disabled={isSubmitting}>
                                        {"Sign Up Your Account"}
                                    </Button>
                            </div>

                            <p className="linkToSignIn">Already have an account? <span onClick={()=>switchModal(dispatch,{
                                content:<SignInForm/>
                            })}>Sign In</span></p>
                        </Form>
                    
                    }
                }
            </FormWrapper>
        </>
    )
}

const SignUpForm = withFormik<SignUpFormProps,SignUpUserData>({
    mapPropsToValues: (props)=>{
        return{
            userName:'',
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    },
    validationSchema: yup.object({
        userName: yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        first_name: yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        last_name: yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: yup.string()
            .email("Invalid email adress")
            .required("Required"),
        password: yup.string()
            .min(6,"password can't be less then 6 characters")
            .required('Password is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], 'Password must match')
    }),

    handleSubmit: async (values,{props,setSubmitting})=>{
       
        try{
            const user = await authService.signUpUser(values);
            console.log(`user after service ${user.first_name}`);
            
            props.switchModal({content:<ConfirmEmail/>})
            props.signUpUser(user);
            savingUserToLocalStorage(user);
            setSubmitting(false);
            
        }catch{
            console.log("can't signUp");
        }
    }
})(SignUpInnerForm);

const mapDispatchToProps = (dispatch:Dispatch<{}>):SignUpFormProps=>{
    return{
        switchModal: (modal:Object)=>{
            dispatch(closeModal())
            dispatch(modalOpen(modal))
        },
        signUpUser:(user:User)=>{
            dispatch(signUpUser(user))
        }
    }
}
export  default connect<SignUpFormProps,any,any>(null,mapDispatchToProps)(SignUpForm)