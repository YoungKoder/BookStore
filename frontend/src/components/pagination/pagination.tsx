import React, { useState, useEffect } from"react";

import "./pagination.scss";
import { range } from "../../tools/creatingRangeOfNumbersForPagination";
import { fetchPageNumbers } from "../../tools/fetchPageNumbers";


interface paginationProps{
    totalRecordsInProps:number|null,
    pageLimit:number,
    pageNeighbours:number,
    onPageChanged:(paginationData:paginationData)=>void
}
export interface paginationData{
    currentPage:number,
    totalPages:number,
    pageLimit:number,
    totalRecords:number
}
export const Pagination:React.FC<paginationProps> = (props:paginationProps)=>{
    const LEFT_PAGE = -1;
    const RIGHT_PAGE = -2;
    const{totalRecordsInProps=null , pageLimit=8, pageNeighbours=0, onPageChanged } = props
    console.log(">>> pagination props:",totalRecordsInProps,pageLimit,pageNeighbours);

    /* pageLimit indicates the number of records to be shown per page*/
    /* totalRecords indicates the total number of records to be paginated. It is required*/
    const totalRecords = typeof totalRecordsInProps === 'number'?totalRecordsInProps:0

    const totalPages = Math.ceil(totalRecords/pageLimit);

    const [currentPage, setCurrentPage] = useState(1);
    const [pages, fetchPages] = useState<number[]>([])
    const [paginationData, setPaginationData] = useState<paginationData>({
        currentPage:0,
        totalPages:0,
        pageLimit:0,
        totalRecords:0
    })

    // let pages = []
    useEffect(()=>{
        fetchPages(fetchPageNumbers({pageNeighbours,currentPage,totalPages}));
    },[])

    useEffect(()=>{
        onPageChanged(paginationData)
    },[currentPage])


    const gotoPage = (page:any) =>{
        const currentPage = Math.max(0, Math.min(page, totalPages));

        setPaginationData({
            currentPage,
            totalPages,
            pageLimit,
            totalRecords
        })

        setCurrentPage(currentPage);
    }
    const handleClick = (page:number) => (e:any)=> {
        e.preventDefault(); 
        gotoPage(page);
    }
    const handleMoveLeft = (e:any)=>{
        e.preventDefault();
        gotoPage(currentPage - (pageNeighbours * 2) - 1);
    }
    const handleMoveRight = (e:any)=>{
        e.preventDefault();
        gotoPage(currentPage + (pageNeighbours * 2) + 1);
    }
    return(
        <>
        <div>{
                ()=>{if(!totalRecords && totalPages===1)return null}    
            }
        </div>
        <div className="container">
            <div className="row justify-content-end">
                <nav className="col-4">
                    <ul className="pagination d-flex justify-content-between">
                        {
                            pages.map((page,index)=>{
                                if(page === LEFT_PAGE) return(
                                    <li key={index} className="page-item">
                                        
                                        <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}><span>PREV</span></a>
                                    </li>
                                )
                                if(page === RIGHT_PAGE) return(
                                    <li key={index} className="page-item">
                                        <a className="page-link" href="#" aria-label="Next" onClick={handleMoveRight}><span >NEXT</span></a>
                                    </li>
                                )
                                return(
                                    
                                    <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                                        <a className="page-link" href="#" onClick={ handleClick(page) }>{ page }</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}