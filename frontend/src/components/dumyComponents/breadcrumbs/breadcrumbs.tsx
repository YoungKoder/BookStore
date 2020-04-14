import React from "react";
import {Link} from "react-router-dom"

import "./breadcrumbs.scss";

interface Match{ 
    path:string,
    url:string,
    isExact:true
}

export interface RouterProps{
    location:Location,
    match:Match,
}

const Breadcrumbs = ({match,location}:RouterProps, {...rest}) => {
    return(
        <>  
            <p className="breadcrumb">
                <span>Home</span>
                <span>
                    <Link to={match.url || ''} className='breadcrumb-link active'>
                        {location.pathname === "/"? "BookList" : "Book"}
                    </Link>
                </span>
            </p>
        </>
    )
}
export default Breadcrumbs;