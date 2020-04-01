import React from "react";

import {
    FormikProps,
    Form,
    Field,
    withFormik
} from 'formik';

import * as yup from "yup";
import { SignInUserData, InitialValues } from "../../types/SignUpUserData";
import ApiServiceBookStore from "../../services/api-service";

const serviceApi = new ApiServiceBookStore();
const SignInInnerForm = (props:FormikProps<SignInUserData>)=>{
    const {touched, errors, isSubmitting} = props;
    return(
        <>
            <Form>
                <Field type="email" name = "email" placeholder="Email"/>
                {touched.email && errors.email && <div>{errors.email}</div>}
                <Field type="password" name = "password" placeholder="Password"/>
                {touched.password && errors.password && <div>{errors.password}</div>}

                <button type="submit" disabled={isSubmitting}>
                    Sumbit
                </button>
            </Form>  
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
        serviceApi.signInUser(values);
        setSubmitting(false);
    },
    

})(SignInInnerForm);