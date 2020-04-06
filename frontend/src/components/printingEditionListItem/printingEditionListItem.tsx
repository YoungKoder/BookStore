import React from "react";
import { PrintingEdition } from "../../types/printingEdition";


export const PrintingEditionListItem = ({printingEdition}:any)=>{

    const{title,description,author_ids} = printingEdition;
    return(
        <div>
            <p>Title - {title}</p>
            <p>Description - {description}</p>
            <p>Author - {author_ids}</p>
        </div>
    )
}
