import { connect } from "react-redux";
import { changeFollow, setUsers } from "../../Redux/UsersReducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    Users: state.Users.Users,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (id) => {
      dispatch(changeFollow(id))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer