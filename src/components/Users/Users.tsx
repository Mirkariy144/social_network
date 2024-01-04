import React from 'react';
import c from './Users.module.css';

const Users = ({
  setCurrentPage,
  currentPage,
  everyUser,
  totalPages,
  setPagesCount,
} : {
  setCurrentPage: (data: number) => void,
  currentPage: number,
  everyUser: JSX.Element[] | null,
  totalPages: number,
  setPagesCount: (data: number) => void
}) => {

  return (
    <div className={c.Container}>
      {totalPages && <div>Всего страниц: {totalPages}</div>}
      <input
        type="number"
        value={currentPage}
        onChange={(e) => setCurrentPage(+e.target.value)}
      />
      <div onClick={() => setPagesCount(10)}>
        <a href="#" className={c.PagesCount}>
          10
        </a>
      </div>
      <div onClick={() => setPagesCount(20)}>
        <a href="#" className={c.PagesCount}>
          20
        </a>
      </div>
      <div onClick={() => setPagesCount(30)}>
        <a href="#" className={c.PagesCount}>
          30
        </a>
      </div>
      <button onClick={() => setCurrentPage(currentPage)}>ЗаПрОс</button>
      {everyUser}
    </div>
  );
};

export default Users;
