import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'
import Users from "./Users";

class UsersClass extends React.Component {

  state = {
    totalPages: null,
    currentPage: 1,
    PagesCount: 10,
  }

  componentDidMount() {
    this.SelectPage(this.state.currentPage)
  }




  SelectPage = (page, count) => {
    if (Number.isNaN(+page) || +page <= 0) {
      return;
    }
    const url = new URL("https://social-network.samuraijs.com/api/1.0/users");
    url.searchParams.set('page', page);
    url.searchParams.set('count', count)

    axios.get(url)
    .then(responce => {
        this.setState({ totalPages: Math.ceil(responce.data.totalCount/count) })

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

  howManyPagesFunc = (num) => {
    this.setState({ PagesCount: num })
    this.SelectPage(this.state.currentPage, num)
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

    console.log(this.props)
      
    return (
        <Users 
        everyUser={everyUser} 
        totalPages={this.state.totalPages} 
        onPageChange={this.onPageChange} 
        howManyPagesFunc={this.howManyPagesFunc} 
        SelectPage={this.SelectPage} 
        currentPage={this.state.currentPage}
        PagesCount={this.state.PagesCount}/>
    )
  }


}

export default UsersClass