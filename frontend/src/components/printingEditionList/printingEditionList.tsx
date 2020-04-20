import React, { useEffect, useCallback } from "react";
import { PrintingEditionsState } from "../../types/stateTypes/printingEditionStateTypes";
import { uploadBooks } from "../../actions/printindEditionActionDispachers";
import { PrintingEditionListItem } from "../dumyComponents/printingEditionListItem/printingEditionListItem";
import { RootState } from "../../store";
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import PrintingEditionsListHeader from "../printingEditionsListHeader/printingEditionsListHeader";

import "./printingEditionList.scss";
import { PrintingEditionListContent } from "../dumyComponents/printingEditionsListContent/printingEditionListContent";


interface OwnProps{

}

interface DispatchProps{
    uploadBooks: () => void
}

interface StateProps{
    printingEditions: PrintingEditionsState
}

type Props = StateProps & DispatchProps & OwnProps


const PrintingEditionList:React.SFC<Props> = (props:Props)=> {
    useEffect(()=>{
        props.uploadBooks()
    },[])
    return(
        <>
            <div className="catalog container">
                <PrintingEditionsListHeader/>
                <PrintingEditionListContent isFetching={props.printingEditions.isFetching} error = {props.printingEditions.error} 
                printingEditions = {props.printingEditions.printingEditionsToShow}/>
            </div>
        </>
    )
}

const mapStateToProps = (states: RootState) => {
    return {
        printingEditions: {
            uploadPrintingEditions:states.printingEdition.uploadPrintingEditions,
            printingEditionsToShow:states.printingEdition.printingEditionsToShow,
            filteredEditions:states.printingEdition.filteredEditions,
            serchedEditions:states.printingEdition.serchedEditions,
            doesSearchOn:states.printingEdition.doesSearchOn,
            doesFilterAdded:states.printingEdition.doesFilterAdded,
            isFetching:states.printingEdition.isFetching,
            error:states.printingEdition.error,
            currency:states.printingEdition.currency,
            sortingByPrice:states.printingEdition.sortingByPrice,
            types:states.printingEdition.types
        }
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>):DispatchProps  => {
    return{
        uploadBooks: ()=>{
            dispatch(uploadBooks())
        }
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PrintingEditionList)
