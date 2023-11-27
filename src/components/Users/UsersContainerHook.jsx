import React, { useCallback, useEffect, useMemo, useState } from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'
import Users from "./Users";
import Loader from '../Loader/Loader'

const UsersListContainer = () => {

  const [users, setUsers] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [PagesCount, setPagesCount] = useState(10)

  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users" + "?page=" + currentPage + "&count=" + PagesCount, { withCredentials: true })
      .then(responce => {
        setUsers(responce.data.items)
        setTotalPages(Math.ceil(responce.data.totalCount / PagesCount))
      })
  }, [currentPage, PagesCount])

  const followPost = (id) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { withCredentials: true, headers: { "API-KEY": "628cafed-fe59-4489-aa8f-713e071ba5d4" } })
      .then(responce => {
        if (responce.data.resultCode === 0) {
          setUsers((users1) => {
            return users1.map((user) => {
              if (user.id === id) {
                return { ...user, followed: true }
              }
              return user
            })
          })
        }
      })
  }
  const followDelete = (id) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": "628cafed-fe59-4489-aa8f-713e071ba5d4" } })
      .then(responce => {
        if (responce.data.resultCode === 0) {
          setUsers((users1) => {
            return users1.map((user) => {
              if (user.id === id) {
                return { ...user, followed: false }
              }
              return user
            })
          })
        }
      })
  }

  const everyUser = users?.map(({ name, id, uniqueUrlName, status, followed, photos: { small } }) => {
    return (
      <div className={c.GridKurwa} key={id} >
        <div className={c.Extension} >
          <NavLink to={`/users/${id}`} >
            <img src={small ? small : UnfoundAva} className={c.MiniAvatar} />
          </NavLink>
          <Button title={followed ? 'Unfollow' : 'Follow'} onClick={() => followed ? followDelete(id) : followPost(id)} />
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
  })


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

export default UsersListContainer