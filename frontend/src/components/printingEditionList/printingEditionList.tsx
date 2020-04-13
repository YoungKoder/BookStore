import React, { useEffect } from "react";
import { PrintingEditionsState } from "../../types/stateTypes/printingEditionStateTypes";
import { useSelector, useDispatch } from "react-redux";
import { PrintingEdition } from "../../types/printingEdition";
import { uploadBooks } from "../../actions/printingEdition.actions";
import { PrintingEditionListItem } from "../dumyComponents/printingEditionListItem/printingEditionListItem";
import { RootState } from "../../store";
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Spinner } from "../dumyComponents/spinner/spinner";
import { ErrorIndicator } from "../dumyComponents/eror-indicator/error-indicator";

import "./printingEditionList.scss";
interface OwnProps{

}

interface DispatchProps{
    uploadBooks: () => void
}

interface StateProps{
    printingEditions: PrintingEditionsState
}

type Props = StateProps & DispatchProps & OwnProps


const PrintingEditionList:React.SFC<Props> = (props:Props, ownProps:OwnProps)=> {
    useEffect(()=>{
        props.uploadBooks()
    },[])

    return(
        <>
        <div className="catalog container">
            <div className="row">
                <div className="catalog_header d-flex justify-content-between">
                    <h2>CATALOG</h2>
                    <div className="catalog_header__rightFilters d-flex justify-content-between col-3">
                        <div className="currency d-flex align-items-center">
                            <p>Currency</p>
                            <div className="checkbox"></div>
                        </div>
                        <div className="sortingByPrice d-flex align-items-center">
                            <p>Sort By</p>
                            <div className="checkbox"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="catalog_content d-flex justify-content-between">
                    <div className="filters col">
                         
                    </div>
                    <div className="itemsCards col-9">
                    {props.printingEditions.isFetching && <Spinner/>}
                    {props.printingEditions.error && <ErrorIndicator/>}
                    {!props.printingEditions.isFetching && <ul className=" cardsList d-flex justify-content-between">             
                        {
                            props.printingEditions.printingEditions.map((edition) =>{
                                return(
                                    <li key={edition._id}><PrintingEditionListItem  
                                        {...edition}
                                    /></li>
                                ) 
                            })
                        }
                    </ul>}
                    </div>
                </div>
            </div>
        </div>
            

        </>
        
    )
}

const mapStateToProps = (states: RootState) => {
    return {
        printingEditions: {
            printingEditions:states.printingEdition.printingEditions,
            isFetching:states.printingEdition.isFetching,
            error:states.printingEdition.error
        }
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps):DispatchProps  => {
    return{
        uploadBooks: ()=>{
            dispatch(uploadBooks())
            console.log("UploadFinished")
        }
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PrintingEditionList)
