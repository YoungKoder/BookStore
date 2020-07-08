import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Book_Logo_svg.jpg"
import {Link}from "react-router-dom";
import SignInForm  from "../../auth/signInForm";
import  SignUpForm  from "../../auth/signUpForm";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../actions/modalsActions/modal.action";

export const Navbar = ()=>{
    const dispatch = useDispatch();
    return(
        <div className="container-fluid navbar">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <Link to="/" className="d-flex"><img src={logo} alt="logo"/></Link>
                    <div className="navbar_rightContent align-items-center d-flex ">
                        <div className="login d-flex align-items-center ">
                        <span className="signInTrigger" onClick={()=>dispatch(modalOpen({
                            content:<SignInForm/>
                        }))}>Login</span>
                        <i onClick={()=>dispatch(modalOpen({
                            content:<SignUpForm/>
                        }))} className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="basket">
                            <Link className="basket-btn icon" to="/" data-badge="6">
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

