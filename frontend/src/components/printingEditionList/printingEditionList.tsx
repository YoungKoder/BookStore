import React, { useEffect, useCallback } from "react";
import { PrintingEditionsState } from "../../types/stateTypes/printingEditionStateTypes";
import { uploadBooks } from "../../actions/printindEditionActionDispachers";
import { PrintingEditionListItem } from "../dumyComponents/printingEditionListItem/printingEditionListItem";
import { RootState } from "../../store";
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Spinner } from "../dumyComponents/spinner/spinner";
import { ErrorIndicator } from "../dumyComponents/eror-indicator/error-indicator";
import PrintingEditionsListHeader from "../dumyComponents/printingEditionsListHeader/printingEditionsListHeader";

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


const PrintingEditionList:React.SFC<Props> = (props:Props)=> {
    // const action = useCallback(()=> props.uploadBooks(), [props.printingEditions.printingEditions])
    // useEffect(()=>{
    //     action()
    // },[props.printingEditions.printingEditions])

    useEffect(()=>{
        props.uploadBooks()
    },[])
    return(
        <>
        <div className="catalog container">
            <PrintingEditionsListHeader/>
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
            error:states.printingEdition.error,
            currency:states.printingEdition.currency
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
