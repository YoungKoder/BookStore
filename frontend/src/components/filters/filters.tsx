import React from "react";

import "./filters.scss";
import { TypeFilter } from "../dumyComponents/editionTypeFilter/editionTypeFilter";
import { EditionType } from "../../types/enums";
import { ThunkDispatch } from "redux-thunk";
import { sortByType, uploadBooks } from "../../actions/printingEditionsActions/printindEditionActionDispachers";

import { connect } from 'react-redux'

interface DispatchProps{
    sortByType:(type:EditionType)=>void
    uploadBooks: ()=>void
}

const Filters = (props:DispatchProps) =>{

    return( 
        <div className="filters col">
            <h2>CATEGORY</h2>
            <div className="filters_type">
                <TypeFilter label="Books" type={EditionType.book} uploadBooks={props.uploadBooks} onChecked={props.sortByType} id="typeBook"/>
                <TypeFilter label="Magazines" type={EditionType.magazine} uploadBooks={props.uploadBooks} onChecked={props.sortByType} id="typeMagazine"/>
                <TypeFilter label="Comics" type={EditionType.comics} uploadBooks={props.uploadBooks} onChecked={props.sortByType} id="typeComics"/>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>):DispatchProps =>{
    return{
        sortByType: (type) =>{
            dispatch(sortByType(type))
        },
        uploadBooks: ()=>{
            dispatch(uploadBooks())
        }
    }
}

export default connect(null,mapDispatchToProps)(Filters);