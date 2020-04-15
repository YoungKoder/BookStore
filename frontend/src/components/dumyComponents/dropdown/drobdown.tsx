import React, { useState, useEffect } from "react";

import "./drobdown.scss";
import { DrobdownMenuItem } from "../../../types/drobdownMenuItems";
import { EditionCurrency } from "../../../types/enums";

interface OwnProps{
    defaultFilterCurrency:EditionCurrency
    drobdownsMenuItems:DrobdownMenuItem[]
    actionFunction: (toCurrency:EditionCurrency)=>void
    uplodBooks: ()=>void
}

type Props = OwnProps;
export const Drobdown:React.SFC<Props> = (OwnProps:OwnProps)=>{

    const {defaultFilterCurrency,drobdownsMenuItems } = OwnProps;

    const [currentFilter, setCurrentFilter] = useState({
        currentFilter:defaultFilterCurrency
    })

    const [filterWasChanged, setFilterChange] = useState({changed:false});

    const [visibleMenu, setVisibleMenu] = useState({
        visible:false
    })

    
    const [className, setClassName] = useState({
        drobdownMenuItemsClass:"drobdown_menuItems"
    })

    useEffect(()=>{
        if(visibleMenu.visible){
            setClassName({
                drobdownMenuItemsClass:"drobdown_menuItems drobdown_menuItems--active"
            })
        }
        else{
            setClassName({
                drobdownMenuItemsClass:"drobdown_menuItems"
            })
        }
    },[visibleMenu.visible])
     
    useEffect(()=>{
        if(filterWasChanged.changed){
            OwnProps.actionFunction(currentFilter.currentFilter);
        }
        // return ()=>console.log("I am going to destroy");
    },[currentFilter.currentFilter])

    const showMenu = ()=>{
        setVisibleMenu(({visible})=>{
            return{
                visible:!visible
            }
        })
    }
    const onItemClickHandler = (e:any)=>{
        showMenu();
        setCurrentFilter({
            currentFilter:e.target.innerText
        })

        setFilterChange({
            changed:true
        })
        // OwnProps.actionFunction(currentFilter.currentFilter);
    }


    const randomKeys = ()=>{
        return Math.floor(Math.random()*10000)
    }
    return(
        <>
        <div className="drobdown">
            <div onClick={showMenu} className="drobdown_title">
                <p className="drobdown_titlePargraph">{currentFilter.currentFilter}</p>
            </div>
            <ul className={className.drobdownMenuItemsClass}>
                {
                    drobdownsMenuItems.map(item => <li key={randomKeys()}  onClick={onItemClickHandler}>{item.title}</li>)
                }
            </ul>
        </div>
            
        </>
    )
}