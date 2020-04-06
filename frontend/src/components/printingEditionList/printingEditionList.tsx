import React, { useEffect, useContext, Dispatch } from "react";
import { contextPrintingEdition } from "../../bookStore-service-context/bookStore-service-context";
import { PrintingEditionCtx } from "../../types/contextTypes/printingEditionsContext.types";
import { PrintingEdition } from "../../types/printingEdition";
import { PrintingEditionListItem } from "../printingEditionListItem/printingEditionListItem";
import {connect, useDispatch} from "react-redux";
import { PrintingEditionsState } from "../../types/stateTypes/printingEditionStateTypes";
import { printingEditionsLoaded } from "../../actions/printingEdition.actions";
import { PrintingEditionsActionTypes } from "../../types/actionTypes/actionCreators.types";


const PrintingEditionList = ({printingEditions}:PrintingEditionsState)=>{
    const dispatch = useDispatch();

    const ctx:PrintingEditionCtx = useContext(contextPrintingEdition);
    useEffect(()=>{
        let data:any= [];
        ctx.actions.getBooks
            .then(res => dispatch(printingEditionsLoaded(res)));
        console.log(`<<< Editions from API ${data}`);
        return;
    }, [])

    return(
        <ul>
            {
                printingEditions.map(edition =>{
                    return(
                        <li key={edition._id}><PrintingEditionListItem printingEdition={edition}/></li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = (state:PrintingEditionsState) => {
    return{
        printingEditions: state.printingEditions
    }
    
}
export default connect(mapStateToProps)(PrintingEditionList);