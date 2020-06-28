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
import { Button } from "../dumyComponents/button/button";


interface DispatchProps{
    
}

interface StateProps{

}
type Props = StateProps & DispatchProps

const SignInInnerForm = (props:OwnProps & FormikProps<SignInUserData>)=>{
    const {touched, errors, isSubmitting, closeModal} = props;
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal=()=> {
        setIsOpen(true);
    }
    const closeSignUpModal=()=>{
        console.log("i am trying to close modal");
        setIsOpen(false);
    }
    const switchModals= ()=> {
        closeModal();
        openModal();
    }
    
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
                                <div className="fieldWrapper">
                                    <Field id="password" type="password" name = "password" placeholder="Password"/>
                                    {touched.password && errors.password && <span className="errorMessage">{errors.password}</span>}
                                </div>

                                <div className="actionWrapper">
                                    <div></div>
                                    <Button type="submit" onClick={()=> console.log("ypu click sign in")} disabled={isSubmitting}>
                                        {"Sign-In"}
                                    </Button>
                                </div>
                                <div className="signUpAction">
                                    <span onClick={()=>closeModal()}>
                                        New to Book publishing Company?
                                    </span>
                                    <Button type="button" onClick={()=>closeModal()} size="long" variant="outlined">
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
interface OwnProps{
    closeModal: ()=>any
}

interface SignInFormProps{
    closeModal: ()=>void
}
export const SignInForm = withFormik<SignInFormProps,SignInUserData>({
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

    handleSubmit:(values:SignInUserData,{setSubmitting})=>{
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