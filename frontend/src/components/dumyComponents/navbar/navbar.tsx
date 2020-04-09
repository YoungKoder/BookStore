import React from "react";
import "./navbar.scss";
import logo from "../../../assets/images/Book_Logo_svg.jpg"
import {Link}from "react-router-dom";

export const Navbar:React.FC<{}> = ()=>{
    return(
        <div className="container-fluid navbar">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <Link to="/" className="d-flex"><img src={logo} alt="logo"/></Link>
                    <div className="navbar_rightContent align-items-center d-flex ">
                        <div className="login d-flex align-items-center ">
                            <Link className="login-btn" to="/signUp">Login</Link>
                            <Link className="login-btn icon" to="/signUp"><i className="fa fa-user" aria-hidden="true"></i></Link>
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

