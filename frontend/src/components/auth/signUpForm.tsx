import React from "react";
import {
    FormikProps,
    Form,
    Field,
    withFormik
  } from 'formik';

import * as yup from "yup";
import { SignUpUserData } from "../../types/SignUpUserData";
import ApiServiceBookStore from "../../services/api-service";

const serviceApi = new ApiServiceBookStore();
const SignUpInnerForm = (props:FormikProps<SignUpUserData>)=>{
    const {touched, errors, isSubmitting} = props;
    return(
        <>
            <Form>
                <Field type="userName" name = "userName" placeholder="User name"/>
                {touched.userName && errors.userName && <div>{errors.userName}</div>}
                <Field type="first_name" name = "first_name" placeholder="First name"/>
                {touched.first_name && errors.first_name && <div>{errors.first_name}</div>}
                <Field type="last_name" name = "last_name" placeholder="Last name"/>
                {touched.last_name && errors.last_name && <div>{errors.last_name}</div>}
                <Field type="email" name = "email" placeholder="Email"/>
                {touched.email && errors.email && <div>{errors.email}</div>}
                <Field type="password" name = "password" placeholder="Password"/>
                {touched.password && errors.password && <div>{errors.password}</div>}
                <Field type="password" name = "confirmPassword" placeholder="Confirm password"/>
                {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}

                <button type="submit" disabled={isSubmitting}>
                    Sumbit
                </button>
            </Form>  
        </>
    )
}

interface InitialValues{

}
export const SignUpForm = withFormik<InitialValues,SignUpUserData >({
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
            .oneOf([yup.ref('password'),null], 'Password must match')
    }),

    handleSubmit:(values,{setSubmitting})=>{
        console.log(`Values from inputs${values}`);
        serviceApi.registerUser(values);
        setSubmitting(false);
    },
    

})(SignUpInnerForm);