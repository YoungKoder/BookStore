import React, { useEffect } from "react";
import { PrintingEdition } from "../../../types/printingEdition";

import "./printingEditionListItem.scss";
// import cardImage from "../../../assets/images/TheTouch_gestalten_book_senses_design_front_900x (1).jpg";

export const PrintingEditionListItem = ({...author}:PrintingEdition)=>{
    const {author_ids,title,price,currency,cover_image} = author;
    return(
        <div className="card">
            <div className="card_image">
                <img src={cover_image} alt="cardImage"/>
            </div>
            <p className="card_title">{title}</p>
            {
                author_ids.map(author=>{
                    return <p key={author._id} className="card_author">{author.name}</p>
                })
            }
            <p className="card_price">{price + currency}</p>
            
        </div>
    )
}
