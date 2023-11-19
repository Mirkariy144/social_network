import React from "react";
import { connect } from "react-redux";
import ProfilePage from "../../ProfilePage/ProfilePage";
import Loader from '../../Loader/Loader'
import c from '../../Content/Content.module.css'
import axios from "axios";
import { setCurrentUser, isFetchingChanger } from "../../../Redux/UsersReducer";

class UserPageContainerClass extends React.Component {
  
  componentDidMount() {
    this.UserPageContainerProps(this.props.CurrentUserID)
  }

  UserPageContainerProps = (id) => {
    const url = new URL("https://social-network.samuraijs.com/api/1.0/profile/" + id)
    console.log(url)

    this.props.isFetchingChanger(true)
    axios.get(url)
    .then(responce => {
      const getUser = responce.data
      this.props.setCurrentUser(getUser)
      this.props.isFetchingChanger(false)
    })
  }

  render() { 
    return (
      <div className={c.appContent}>
        <img src='https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg' /> 
        <ProfilePage Users={this.props.CurrentUser} Posts={this.props.Posts} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    Posts: state.ShitPosts.Posts,
    CurrentUserID: state.Users.CurrentUserID,
    CurrentUser: state.Users.CurrentUser,
    isFetching: state.Users.isFetching,
}}

const UserPageContainer = connect(mapStateToProps, {setCurrentUser, isFetchingChanger})(UserPageContainerClass)

export default UserPageContainer;