import React, { useEffect } from "react";
import { PrintingEdition } from "../../../types/printingEdition";
import { Spinner } from "../spinner/spinner";
import { ErrorIndicator } from "../eror-indicator/error-indicator";
import { PrintingEditionListItem } from "../printingEditionListItem/printingEditionListItem";
import Filters from "../../filters/filters";
import {withRouter, RouteComponentProps} from "react-router-dom";

import "./printingEditionListContent.scss";

interface OwnProps extends RouteComponentProps{
    isFetching:Boolean,
    error:String,
    printingEditions:PrintingEdition[]
}
 const PrintingEditionListContent = (Props:OwnProps) =>{
    const {isFetching, error, printingEditions} = Props;
    useEffect(()=>{
        console.log(">>>editions for view", printingEditions);
    },[printingEditions])
    return(
        <>
            <div className="row">
                    <div className="catalog_content d-flex justify-content-between">
                        <Filters/>
                        <div className="itemsCards col-9">
                        {isFetching && <Spinner/>}
                        {error && <ErrorIndicator/>}
                        {!isFetching && <ul className=" cardsList d-flex justify-content-between">             
                            {
                                printingEditions.map((edition) =>{
                                    return(
                                        <li key={edition._id} onClick={()=>Props.history.push(`/${edition._id}`)}>
                                            <PrintingEditionListItem {...edition}/></li>
                                    ) 
                                })
                            }
                        </ul>}
                        </div>
                    </div>
                </div>
        </>
    )
}
export default withRouter<OwnProps,any>(PrintingEditionListContent);