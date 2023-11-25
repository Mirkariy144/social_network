import React, { useEffect, useState } from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'
import Users from "./Users";
import Loader from '../Loader/Loader'
// import { connect } from "react-redux";
// import { changeFollow, setUsers, totalPagesChanger, currentPageChanger, PagesCountChanger, isFetchingChanger, setCurrentUserID } from "../../Redux/UsersReducer";

const UsersListContainer = () => {

  const [users, setUsers] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [PagesCount, setPagesCount] = useState(10)

  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users" + "?page=" + currentPage + "&count=" + PagesCount)
      .then(responce => {
        setUsers(responce.data.items)
        setTotalPages(Math.ceil(responce.data.totalCount / PagesCount))
      })
  }, [currentPage, PagesCount])

  const onFollowClick = (id) => {
    setUsers((users1) => {
      return users1.map((user) => {
        if (user.id === id) {
          return { ...user, followed: !user.followed }
        }
        return user
      })
    })
  }

  const everyUser = users ? users.map(({ name, id, uniqueUrlName, status, followed, photos: { small } }) => {
    return (
      <div className={c.GridKurwa} key={id} >
        <div className={c.Extension} >
          <NavLink to={`/users/${id}`} >
            <img src={small ? small : UnfoundAva} className={c.MiniAvatar} />
          </NavLink>
          <Button title={followed ? 'Unfollow' : 'Follow'} onClick={() => onFollowClick(id)} />
        </div>
        <div className={c.MainInfo}>
          <NavLink to={`/users/${id}`} className={c.item} >
            <div className={c.User} >
              <div className={c.Name}>
                {name}
              </div>
              <div className={c.Country}>
                {status}
              </div>
              <div className={c.City}>
                {uniqueUrlName}
              </div>
              <div className={c.Status}>
                kurwa
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }) : null


  if (!users) {
    return <Loader />
  }
  return (
    <Users setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      everyUser={everyUser}
      totalPages={totalPages}
      PagesCount={PagesCount}
      setPagesCount={setPagesCount} />
  )
}

// let mapStateToProps = (state) => {
//   return {
//     Users: state.Users.Users,
//     totalPages: state.Users.totalPages,
//     currentPage: state.Users.currentPage,
//     PagesCount: state.Users.PagesCount,
//     isFetching: state.Users.isFetching,
//   };
// }

// const UsersContainer = connect(mapStateToProps, 
//   { changeFollow, setUsers, totalPagesChanger, 
//     currentPageChanger, PagesCountChanger, isFetchingChanger, setCurrentUserID })(UsersListContainer);

export default UsersListContainer