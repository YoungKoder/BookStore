import React, { useEffect } from "react";
import { PrintingEdition } from "../../types/printingEdition";
import store from "../../store";


export const PrintingEditionListItem = ({printingEdition}:any)=>{
    const {title,description,author_ids} = printingEdition
    return(
        <div>
            <p>Title - {title}</p>
            <p>Description - {description}</p>
            <p>Author - {author_ids}</p>
        </div>
    )
}
