import { range } from "./creatingRangeOfNumbersForPagination";

interface fetchParams{
    pageNeighbours:number,
    currentPage:number,
    totalPages:number
}

export const fetchPageNumbers = (fetchParams:fetchParams)=>{

    const LEFT_PAGE = -1;
    const RIGHT_PAGE = -2;

    const{pageNeighbours,currentPage,totalPages} = fetchParams;
    console.log(">>> params in function fetchNumbers", pageNeighbours,currentPage,totalPages)
    const totalNumbers = ((pageNeighbours*2)+3);

        const totalBlocks = totalNumbers+2;

        if(totalPages>totalBlocks){
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages-1, currentPage+pageNeighbours);

            let pages = range({from:startPage, to:endPage})

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */

            const hasLeftSpill = startPage>2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch(true){
                case(hasLeftSpill && !hasRightSpill):{
                    const extraPages = range({from:startPage - spillOffset, to:startPage - 1});
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
                case(!hasLeftSpill && hasRightSpill):{
                    const extraPages = range({from:endPage+1, to:endPage+spillOffset});
                    pages = [...pages,...extraPages,RIGHT_PAGE];
                    break;
                }
                case(hasLeftSpill && hasRightSpill):
                default:{
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
                    break;
                }
            }
            return [1,...pages,totalPages]
        }
        return range({from:1, to:totalPages});
}