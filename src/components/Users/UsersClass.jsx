import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'

class UsersClass extends React.Component {

  state = {
    totalPages: null,
    currentPage: 1,
  }

  componentDidMount() {
    this.SelectPage(this.state.currentPage)
  }




  SelectPage = (page) => {
    if (Number.isNaN(+page) || +page <= 0) {
      return;
    }
    const url = new URL("https://social-network.samuraijs.com/api/1.0/users");
    url.searchParams.set('page', page);

    axios.get(url)
    .then(responce => {
      this.setState({ totalPages: Math.ceil(responce.data.totalCount/10) })

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

  
  onPageChange = (value) => {
    this.setState({ currentPage: value })
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
      
    return (
      <div className={c.Container} >
        {this.state.totalPages && (
          <div>Всего страниц: {this.state.totalPages}</div>
        )}
        <input
          type="number"
          value={this.state.currentPage}
          onChange={(e) => this.onPageChange(e.target.value)}
        />
        <button onClick={() => this.SelectPage(this.state.currentPage)}>ЗаПрОс</button>
        {everyUser}
      </div>
  )
  }


}

export default UsersClass