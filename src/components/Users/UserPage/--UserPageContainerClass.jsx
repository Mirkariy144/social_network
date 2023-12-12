import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../../ProfilePage/ProfilePage';
import c from '../../Content/Content.module.css';
import axios from 'axios';
import {
  setCurrentUser,
  isFetchingChanger,
  setCurrentUserID,
} from '../../../Redux/UsersReducer';

class UserPageContainerClass extends React.Component {
  componentDidMount() {
    this.UserPageContainerProps(this.props.CurrentUserID);
  }

  UserPageContainerProps = (id) => {
    const url = new URL(
      'https://social-network.samuraijs.com/api/1.0/profile/' + id,
    );
    this.props.isFetchingChanger(true);
    axios.get(url).then((responce) => {
      const getUser = responce.data;
      this.props.setCurrentUser(getUser);
      this.props.isFetchingChanger(false);
    });
  };

  setCurrentUserID = (id) => {
    this.props.setCurrentUserID(id);
  };

  render() {
    return (
      <div className={c.appContent}>
        <img src="https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg" />
        <ProfilePage
          Users={this.props.CurrentUser}
          Posts={this.props.Posts}
          setCurrentUserID={this.setCurrentUserID}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    Posts: state.ShitPosts.Posts,
    CurrentUserID: state.Users.CurrentUserID,
    CurrentUser: state.Users.CurrentUser,
    isFetching: state.Users.isFetching,
  };
};

export default connect(mapStateToProps, {
  setCurrentUser,
  isFetchingChanger,
  setCurrentUserID,
})(UserPageContainerClass);
