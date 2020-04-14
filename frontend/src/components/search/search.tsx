import React, { useState } from "react";
import { ThunkDispatch } from 'redux-thunk';

import "./search.scss";
import { searchEditions, uploadBooks } from "../../actions/printingEdition.actions";
import { connect } from 'react-redux'

interface DispatchProps{
    searchPrintingEditions: (searched:string)=>void ,
    uploadEditions: ()=>void
}

const Search:React.SFC<DispatchProps> = (props:DispatchProps)=>{

    const [title, setTitle] = useState({
        title:""
    })

    const onchange = (e:any) =>{
        setTitle({
            ...title,
            [e.target.name]:e.target.value
        });

        if(e.target.value!==""){
            props.searchPrintingEditions(e.target.value)
        }else{
            props.uploadEditions()
        }
    }

    return(
        <input name="title" onChange={onchange} className="search col-3" type="text" placeholder="search"/>
    )
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>):DispatchProps =>{
    return{
        searchPrintingEditions: (searched)=> {
            dispatch(searchEditions(searched))
        },
        uploadEditions: ()=> {
            dispatch(uploadBooks());
        }
    }
}
export default connect(null,mapDispatchToProps)(Search);
