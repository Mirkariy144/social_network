import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import UnfoundAva from '../../Img/avaUnfound.jpg'
import Users from "./Users";
import { connect } from "react-redux";
import { changeFollow, setUsers, totalPagesChanger, currentPageChanger, PagesCountChanger } from "../../Redux/UsersReducer";

class UsersClass extends React.Component {

  componentDidMount() {
    this.SelectPage(this.props.currentPage)
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
        this.props.totalPagesChanger(Math.ceil(responce.data.totalCount/count))

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
    this.props.currentPageChanger(value)
  }

  howManyPagesFunc = (num) => {
    this.props.PagesCountChanger(num)
    this.SelectPage(this.props.currentPage, num)
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
      <>
        {this.props.isFetching?<span class={c.loader}></span>:<Users 
        everyUser={everyUser} 
        totalPages={this.props.totalPages} 
        onPageChange={this.onPageChange} 
        howManyPagesFunc={this.howManyPagesFunc} 
        SelectPage={this.SelectPage} 
        currentPage={this.props.currentPage}
        PagesCount={this.props.PagesCount}/>}
        {/* <Users 
        everyUser={everyUser} 
        totalPages={this.props.totalPages} 
        onPageChange={this.onPageChange} 
        howManyPagesFunc={this.howManyPagesFunc} 
        SelectPage={this.SelectPage} 
        currentPage={this.props.currentPage}
        PagesCount={this.props.PagesCount}/> */}
      </>
    )
  }


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

let mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (id) => {
      dispatch(changeFollow(id))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    totalPagesChanger: (totalPagesNum) => {
      dispatch(totalPagesChanger(totalPagesNum))
    },
    currentPageChanger: (currentPageNum) => {
      dispatch(currentPageChanger(currentPageNum))
    },
    PagesCountChanger: (PagesCountNum) => {
      dispatch(PagesCountChanger(PagesCountNum))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer