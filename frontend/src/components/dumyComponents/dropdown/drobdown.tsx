import React, { useState, useEffect } from "react";

import "./drobdown.scss";
import { DrobdownMenuItem } from "../../../types/drobdownMenuItems";


interface OwnProps{
    defaultFilter:string
    drobdownsMenuItems:DrobdownMenuItem[]
}

type Props = OwnProps;
export const Drobdown:React.SFC<Props> = (drobdownsItems:OwnProps)=>{

    const {defaultFilter,drobdownsMenuItems } = drobdownsItems;
    let drobdownMenuItemsClass = "drobdown_menuItems";

    const [currentFilter, setCurrentFilter] = useState({
        currentFilter:defaultFilter
    })

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
    }


    const randomKeys = ()=>{
        return Math.floor(Math.random()*10000)
    }
    return(
        <>
        <div className="drobdown">
            <div onClick={showMenu} className="drobdown_title">
                <p>{currentFilter.currentFilter}</p>
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