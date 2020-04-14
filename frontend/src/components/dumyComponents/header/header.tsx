import React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import "./header.scss";
import {Route} from "react-router-dom";
import Search from "../../search/search";

interface OwnProps{

}

export const Header:React.FC<any> =(props:OwnProps)=>{
    return(
        <>
            <div className="container-fluid header">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <Route path="/" component={Breadcrumbs}/>
                        <Search/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;