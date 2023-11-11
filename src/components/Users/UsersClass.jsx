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
            AvatarMin: oldUser.photos.small,
            id: oldUser.id,
            Education: 'X-ray',
            Website: 'Just for me',
            Birthday: '30.06.1996',
          }
        })
        const num = Math.ceil(responce.data.totalCount/10)
        this.props.setUsers(newUsers)
        this.num = num
      })
  }

  num = 1

  SelectPage = (page) => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users" + '?page=' + page)
    .then(responce => {
      const newUsers = responce.data.items.map((oldUser) => {
        return {
          Name: oldUser.name,
          Country: 'Nothin',
          City: 'Nowhere',
          Status: oldUser.status,
          followed: oldUser.followed,
          Avatar: oldUser.photos.large,
          AvatarMin: oldUser.photos.small,
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
    const everyUser = this.props.Users.map(({Name, Country, City, Status, followed, AvatarMin, id}) => {
      return (
          <div className={c.GridKurwa} key={id}>
            <div className={c.Extension} >
              <NavLink to={`/users/${id}`} >
                <img src={AvatarMin?AvatarMin:UnfoundAva} className={c.MiniAvatar} />
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
    const pagesNums = () => {
      for ( let i = 1; i <= this.num; i++) {
        if (this.props.Pages.length === 0) {
          this.props.pages(i)
        }
      }
    }

    const numChecker = (num) => {
      console.log(num)
    }

    const selectedPage = React.createRef()

    const addNums = this.props.Pages.map((item) => {
      return <option id={item} value={item} >{item}</option>
    })
  
    return (
      <div className={c.Container} >
        <select id="select" onClick={pagesNums} ref={selectedPage} onChange={() => this.SelectPage(selectedPage.current.value)}>
          {addNums}
        </select>
        {everyUser}
      </div>
  )
  }


}

export default UsersClass