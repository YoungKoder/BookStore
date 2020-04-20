import React, { useEffect, useState, useCallback } from "react";

import "./editionTypeFilter.scss";
import { EditionType } from "../../../types/enums";
import { uploadBooks } from "../../../actions/printindEditionActionDispachers";

interface OwnProps{
    id:string
    type:EditionType
    label:string
    onChecked: (type:EditionType)=>void
    uploadBooks:()=>void
}

export const TypeFilter:React.SFC<OwnProps> = (props:OwnProps)=>{
    const {id,label, type, onChecked,uploadBooks} = props;
    const [checked, setCheked] = useState(false);
    const [typeEdition, setType] = useState(EditionType.default);

    useEffect(()=>{
        checked? onChecked(typeEdition) : onChecked(EditionType.default);
    },[checked,type])

    const chooseTypeHandler = (e:any)=>{
        const element = e.target;
        const type = element.getAttribute("data-type");

        setType(type);
        setCheked((checked)=>!checked);
        // onChecked(type);
    }

    return(
        <label onClick={chooseTypeHandler} key={id} data-type={type} className="type">
            <input type="checkbox" onChange={chooseTypeHandler} name="" id={""+id}/>
            {label}
        </label>
    )
}