import React from "react";
import { Link } from "react-router-dom";

export const SignInTrigger = ()=>{
    return(
        <Link className="login-btn" to="/signUp">Login</Link>
    )
}