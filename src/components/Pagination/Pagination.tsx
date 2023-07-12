import React from "react";
import { PaginationStyled } from "./Pagination.styled";
import { arrayRange } from "@/utils/common";

const Pagination = ({totalPage, currentPage, onPageChange}: any) => {
  let paginationList = []
  if(currentPage < 2) paginationList = arrayRange(currentPage, currentPage+3, 1)
  else if(totalPage-1 > currentPage) paginationList = arrayRange(currentPage-1, currentPage+2, 1)
  else {
    paginationList =  arrayRange(currentPage-3, totalPage, 1)
  }
  
  return (
  <PaginationStyled>
    {currentPage > 1 && <div onClick={() => onPageChange(currentPage-1)} className="item">{'<'}</div>}
    {currentPage > 2 && <div onClick={() => onPageChange(1)} className="item">{1}</div>}
    {currentPage > 3 && <span>..</span>}
    {paginationList.map((item, index) => 
          <div key={item*index} onClick={() => onPageChange(item)} className="item">{item}</div>
    )}
    {
      currentPage  <= totalPage -3 && 
      <>
        <span>..</span>
        <div onClick={() => onPageChange(totalPage)} className="item">{totalPage}</div>
      </>
    }
    {currentPage < totalPage &&  <div onClick={() => onPageChange(currentPage+1)} className="item">{'>'}</div>}
  </PaginationStyled>
)}

export default React.memo(Pagination)