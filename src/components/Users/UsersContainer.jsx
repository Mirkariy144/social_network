import { connect } from "react-redux";
import { changeFollow, pages, setUsers } from "../../Redux/UsersReducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    Users: state.Users.Users,
    Pages: state.Users.Pages,
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
    pages: (num) => {
      dispatch(pages(num))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer