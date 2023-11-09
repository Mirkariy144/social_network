import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'

class UsersClass extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(responce => {
        const newUsers = responce.data.items.map((oldUser) => {
          return {
            Name: oldUser.name,
            Country: 'Nothin',
            City: 'Nowhere',
            Status: oldUser.status,
            followed: oldUser.followed,
            Avatar: oldUser.photos.large,
            id: oldUser.id,
            Education: 'X-ray',
            Website: 'Just for me',
            Birthday: '30.06.1996',
          }
        })
        this.props.setUsers(newUsers)
      })
  }

  onFollowClick = (id) => {
    this.props.changeFollow(id)
  }

  render() {
    const everyUser = this.props.Users.map(({Name, Country, City, Status, followed, Avatar, id}) => {
      return (
          <div className={c.GridKurwa} key={id}>
            <div className={c.Extension} >
              <NavLink to={`/users/${id}`} >
                <img src={Avatar?Avatar:UnfoundAva} className={c.MiniAvatar} />
              </NavLink>
              <Button id={id} title={followed?'Unfollow':'Follow'} onClick={() => this.onFollowClick(id)} />
            </div>
            <div className={c.MainInfo}>
              <NavLink to={`/users/${id}`} className={c.item} >
                <div className={c.User} >
                  <div className={c.Name}>
                    {Name}
                  </div>
                  <div className={c.Country}>
                    {Country}
                  </div>
                  <div className={c.City}>
                    {City}
                  </div>
                  <div className={c.Status}> 
                    {Status?'kurwa':'have not status'}
                  </div> 
                </div>
              </NavLink>
            </div>
          </div>
      )
    });
    return (
      <div className={c.Container}>
        {everyUser}
      </div>
  )
  }


}

export default UsersClass