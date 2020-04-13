import React, { useEffect } from "react";
import { PrintingEdition } from "../../../types/printingEdition";
import store from "../../../store";
import { prependOnceListener } from "cluster";

import "./printingEditionListItem.scss";

export const PrintingEditionListItem = ({...author}:PrintingEdition)=>{
    const {author_ids,title,price,currency,cover_image} = author;
    useEffect(()=>{
        console.log("Author from response", author);
    },[])
    return(
        <div className="card">
            <div className="card_image">
                <img src={cover_image} alt="cardImage"/>
            </div>
            <p>title - {title}</p>

            <p>Price - {price + currency}</p>
            {
                author_ids.map(author=>{
                    return <p>Author - {author.name}</p>
                })
            }
            
        </div>
    )
}
