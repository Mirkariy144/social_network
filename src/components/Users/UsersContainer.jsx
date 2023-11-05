import { connect } from "react-redux";
import Users from "./Users";
import { changeFollow } from "../../Redux/UsersReducer";

let mapStateToProps = (state) => {
  return {
    Users: state.Users.Users,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (id) => {
      dispatch(changeFollow(id))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer