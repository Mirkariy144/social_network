import React from 'react';
import c from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import UnfoundAva from '../../Img/avaUnfound.jpg';
import Users from './Users';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import {
  changeFollow,
  setUsers,
  totalPagesChanger,
  currentPageChanger,
  PagesCountChanger,
  isFetchingChanger,
  setCurrentUserID,
} from '../../Redux/UsersReducer';

class UsersClass extends React.Component {
  componentDidMount() {
    this.SelectPage(this.props.currentPage, this.props.PagesCount);
  }

  SelectPage = (page, count) => {
    if (Number.isNaN(+page) || +page <= 0) {
      return;
    }
    const url = new URL('https://social-network.samuraijs.com/api/1.0/users');
    url.searchParams.set('page', page);
    url.searchParams.set('count', count);
    this.props.isFetchingChanger(true);

    axios.get(url).then((responce) => {
      this.props.totalPagesChanger(Math.ceil(responce.data.totalCount / count));
      this.props.isFetchingChanger(false);
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
        };
      });
      this.props.setUsers(newUsers);
    });
  };

  onFollowClick = (id) => {
    this.props.changeFollow(id);
  };

  onPageChange = (value) => {
    this.props.currentPageChanger(value);
  };

  howManyPagesFunc = (num) => {
    this.props.PagesCountChanger(num);
    this.SelectPage(this.props.currentPage, num);
  };

  // setCurrentUserID = (id) => {
  //   this.props.setCurrentUserID(id)
  // }

  render() {
    const everyUser = this.props.Users.map(
      ({ Name, Country, City, Status, followed, AvatarMin, id }) => {
        return (
          <div className={c.GridKurwa} key={id}>
            <div className={c.Extension}>
              <NavLink to={`/users/${id}`}>
                <img
                  src={AvatarMin ? AvatarMin : UnfoundAva}
                  className={c.MiniAvatar}
                />
              </NavLink>
              <Button
                id={id}
                title={followed ? 'Unfollow' : 'Follow'}
                onClick={() => this.onFollowClick(id)}
              />
            </div>
            <div className={c.MainInfo}>
              <NavLink to={`/users/${id}`} className={c.item}>
                <div className={c.User}>
                  <div className={c.Name}>{Name}</div>
                  <div className={c.Country}>{Country}</div>
                  <div className={c.City}>{City}</div>
                  <div className={c.Status}>
                    {Status ? 'kurwa' : 'have not status'}
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        );
      },
    );
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            everyUser={everyUser}
            totalPages={this.props.totalPages}
            onPageChange={this.onPageChange}
            howManyPagesFunc={this.howManyPagesFunc}
            SelectPage={this.SelectPage}
            currentPage={this.props.currentPage}
            PagesCount={this.props.PagesCount}
          />
        )}
      </>
    );
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
};

const UsersContainer = connect(mapStateToProps, {
  changeFollow,
  setUsers,
  totalPagesChanger,
  currentPageChanger,
  PagesCountChanger,
  isFetchingChanger,
  setCurrentUserID,
})(UsersClass);

export default UsersContainer;
