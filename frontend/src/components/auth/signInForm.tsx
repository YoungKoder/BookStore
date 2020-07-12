import React, { Dispatch } from "react";

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
import { Button } from "../dumyComponents/button/button";
import { useDispatch, connect } from "react-redux";
import { modalOpen } from "../../actions/modalsActions/modal.action";
import SignUpForm  from "./signUpForm";
import { User } from "../../types/user";
import { signInUser } from "../../actions/userActions/userAction";
import store from "../../store";
import  ForgotPasswordForm  from "./forgotPassword";

const SignInInnerForm = (props:SignInFormProps & FormikProps<SignInUserData>)=>{
    const {touched, errors, isSubmitting} = props;
    const dispatch = useDispatch();
    return(
        <>
            <FormWrapper isAuth = {true} title="Sign-In">
                {
                    {
                        content:
                            <Form className="authFormInner">
                                <label htmlFor="email">Email</label>
                                <div className="fieldWrapper">
                                    <Field id="email" type="email" name = "email" placeholder="Email"/>
                                    {touched.email && errors.email && <span className="errorMessage">{errors.email}</span>}
                                </div>
                                <label htmlFor="password">Password</label>
                                <div className="fieldWrapper passwordField">
                                    <span className="passwordField_forgotPass" onClick={()=>dispatch(modalOpen({
                                        content:<ForgotPasswordForm/>
                                    }))}>Forgot your password?</span>
                                    <Field id="password" className="" type="password" name = "password" placeholder="Password"/>
                                    {touched.password && errors.password && <span className="errorMessage">{errors.password}</span>}
                                </div>

                                <div className="actionWrapper">
                                    <div></div>
                                    <Button type="submit" onClick={()=> console.log("ypu click sign in")} disabled={isSubmitting}>
                                        {"Sign-In"}
                                    </Button>
                                </div>
                                <div className="signUpAction">
                                    <span onClick={()=>dispatch(modalOpen({
                                        content:<SignUpForm/>
                                    }))}>
                                        New to Book publishing Company?
                                    </span>
                                    <Button type="button" onClick={()=>dispatch(modalOpen({
                                        content:<SignUpForm/>
                                    }))} size="long" variant="outlined">
                                        {"Sign Up"}
                                    </Button>
                                </div>
                            </Form>  
                    }
                }
            </FormWrapper>
        </>
    )
}

interface SignInFormProps{
    signInUser: (user:User, isAuth:boolean)=>void
}
const SignInForm = withFormik<SignInFormProps,SignInUserData>({
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

    handleSubmit:async (values:SignInUserData,{props,setSubmitting})=>{
        console.log(`Values from inputs${values}`);
        
        try{
            const user = await authService.signInUser(values);
            props.signInUser(user, true)
            setSubmitting(false);
        }
        catch(error){
            console.log("can't signIn");
        };
    }
})(SignInInnerForm);

const mapDispatchToProps = (dispatch:Dispatch<{}>):SignInFormProps=>{
    return{
        signInUser:(user:User, isAuth:boolean)=>{
            dispatch(signInUser(user, isAuth))
        }
    }
}

export default connect<SignInFormProps,any,any>(null,mapDispatchToProps)(SignInForm);