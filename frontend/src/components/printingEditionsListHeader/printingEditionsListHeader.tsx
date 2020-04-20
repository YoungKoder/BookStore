import React from "react";
import { Drobdown } from "../dumyComponents/dropdown/drobdown";
import { DrobdownMenuItem } from "../../types/drobdownMenuItems";
import { EditionCurrency, PriceFilter } from "../../types/enums";
import { connect } from 'react-redux'

import "./printingEditionsListHeader.scss";
import { ThunkDispatch } from "redux-thunk";
import { changeCurrency, changeSortingWay } from "../../actions/printindEditionActionDispachers";

interface DispatchProps{
    changeCurrency: (s:EditionCurrency|any)=>void,
    filterByPrice: (S:PriceFilter|any)=> void
}

const PrintingEditionsListHeader:React.FC<DispatchProps> = (dispatchProps:DispatchProps)=>{
    const drobdownMenuItemsCurrency:DrobdownMenuItem[] = [
        {title:EditionCurrency.USD},
        {title:EditionCurrency.EUR},
        {title:EditionCurrency.RUB}];

    const drobdownMenuItemsPrice:DrobdownMenuItem[] = [
        {title:PriceFilter.HightToLow},
        {title:PriceFilter.LowToHight}
    ]
    return(
        <div className="row">
            <div className="catalog_header d-flex justify-content-between">
                <h2>CATALOG</h2>
                <div className="catalog_header__rightFilters d-flex justify-content-between ">
                    <div className="currency d-flex align-items-center">
                        <p>Currency</p>
                        <Drobdown defaultFilterSorting={EditionCurrency.USD}
                       
                        actionFunction = {dispatchProps.changeCurrency}
                        drobdownsMenuItems={drobdownMenuItemsCurrency}
                        />
                    </div>
                    <div className="sortingByPrice d-flex align-items-center">
                        <p>Sort By</p>
                        <Drobdown defaultFilterSorting={PriceFilter.LowToHight}
                        
                        actionFunction = {dispatchProps.filterByPrice}
                        drobdownsMenuItems={drobdownMenuItemsPrice}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>):DispatchProps =>{
    return{
        changeCurrency: (fromCurrency)=>{
            dispatch(changeCurrency(fromCurrency))
        },
        filterByPrice: (sortingWay)=>{
            dispatch(changeSortingWay(sortingWay))
        }
    }
}

export default connect(null,mapDispatchToProps)(PrintingEditionsListHeader);