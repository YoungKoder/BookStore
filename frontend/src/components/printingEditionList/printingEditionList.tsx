import React, { useEffect, useCallback, useState } from "react";
import { PrintingEditionsState } from "../../types/stateTypes/printingEditionStateTypes";
import { uploadBooks, setCurrentEditions } from "../../actions/printindEditionActionDispachers";
import { PrintingEditionListItem } from "../dumyComponents/printingEditionListItem/printingEditionListItem";
import { RootState } from "../../store";
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import PrintingEditionsListHeader from "../printingEditionsListHeader/printingEditionsListHeader";

import "./printingEditionList.scss";
import  PrintingEditionListContent from "../dumyComponents/printingEditionsListContent/printingEditionListContent";
import { Pagination, paginationData } from "../pagination/pagination";
import { PrintingEdition } from "../../types/printingEdition";


interface OwnProps{

}

interface DispatchProps{
    uploadBooks: () => void,
    setCurrentEditions: (editions:PrintingEdition[])=>void
}

interface StateProps{
    printingEditions: PrintingEditionsState
}

type Props = StateProps & DispatchProps & OwnProps


const PrintingEditionList:React.SFC<Props> = (props:Props)=> {
    
    const [currentEditions, setCurrentEditions] = useState<PrintingEdition[]>([]);
    // const [uploaded, setUploaded]= useState(false); 
    useEffect(()=>{
        props.uploadBooks()
    },[])
    
    // const onPageChanged = (data:paginationData) =>{
    //     const { currentPage, totalPages, pageLimit } = data;
    //     const offset = (currentPage-1)*pageLimit;
    //     const currentEditionsToShow = currentEditions.slice(offset, offset+pageLimit);
    //     props.setCurrentEditions(currentEditionsToShow);
    // }

    return(
        <>
            <div className="catalog container">
                <PrintingEditionsListHeader/>
                <PrintingEditionListContent isFetching={props.printingEditions.isFetching} error = {props.printingEditions.error} 
                printingEditions = {props.printingEditions.printingEditionsToShow}/>
                {/* <Pagination onPageChanged={onPageChanged} totalRecordsInProps={10} pageLimit={2} pageNeighbours={2}/> */}
            </div>
        </>
    )
}

const mapStateToProps = (states: RootState) => {
    return {
        printingEditions: {
            ...states.printingEdition
        }
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>):DispatchProps  => {
    return{
        uploadBooks: ()=>{
            dispatch(uploadBooks())
        },
        setCurrentEditions: (editions)=>{
            dispatch(setCurrentEditions(editions))
        }
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PrintingEditionList)
