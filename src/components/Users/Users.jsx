import React from "react";
import c from './Users.module.css'

const Users = ({everyUser, totalPages, onPageChange, howManyPagesFunc, SelectPage, currentPage, PagesCount}) => {

  return (
    <div className={c.Container} >
    {totalPages && (
      <div>Всего страниц: {totalPages}</div>
    )}
    <input
      type="number"
      value={currentPage}
      onChange={(e) => onPageChange(e.target.value)}
    />
    <div onClick={() => howManyPagesFunc(10)}><a href="#" className={c.PagesCount}>10</a></div>
    <div onClick={() => howManyPagesFunc(20)}><a href="#" className={c.PagesCount}>20</a></div>
    <div onClick={() => howManyPagesFunc(30)}><a href="#" className={c.PagesCount}>30</a></div>
    <button onClick={() => SelectPage(currentPage, PagesCount)}>ЗаПрОс</button>
    {everyUser}
  </div>
  )
}

export default Users