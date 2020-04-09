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
            {props.printingEditions.isFetching && <Spinner/>}
            {props.printingEditions.error && <ErrorIndicator/>}
            {!props.printingEditions.isFetching && <ul>             
                {
                    props.printingEditions.printingEditions.map(edition =>{
                        return(
                            <li key={edition._id}><PrintingEditionListItem  printingEdition = {edition}/></li>
                        ) 
                    })
                }
            </ul>}

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
