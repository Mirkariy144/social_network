import React, {useEffect, useState} from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'
import Users from "./Users";
import Loader from '../Loader/Loader'
import { connect } from "react-redux";
import { changeFollow, setUsers, totalPagesChanger, currentPageChanger, PagesCountChanger, isFetchingChanger, setCurrentUserID } from "../../Redux/UsersReducer";

const UsersListContainer = () => {

  const [users, setUsers] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [PagesCount, setPagesCount] = useState(10)

  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users" + "?page=" + currentPage + "&count=" + PagesCount)
      .then(responce => {
        setUsers(responce.data.items)
        setTotalPages(Math.ceil(responce.data.totalCount/PagesCount))
      })
  })


  return (
    <Users setCurrentPage={setCurrentPage} 
    currentPage={currentPage} 
    users={users} 
    totalPages={totalPages} 
    PagesCount={PagesCount}
    setPagesCount={setPagesCount}/>
  )
}

let mapStateToProps = (state) => {
  return {
    Users: state.Users.Users,
    totalPages: state.Users.totalPages,
    currentPage: state.Users.currentPage,
    PagesCount: state.Users.PagesCount,
    isFetching: state.Users.isFetching,
  };
}

const UsersContainer = connect(mapStateToProps, 
  { changeFollow, setUsers, totalPagesChanger, 
    currentPageChanger, PagesCountChanger, isFetchingChanger, setCurrentUserID })(UsersListContainer);

export default UsersContainer