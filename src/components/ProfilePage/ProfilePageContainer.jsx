import ProfilePage from "./ProfilePage"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    Post: state.ShitPosts.Post,
    Users: state.Users.Users[0],
  }
}

const ProfilePageContainer = connect(mapStateToProps)(ProfilePage);

export default ProfilePageContainer