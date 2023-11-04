import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    Users: state.Users.Users,
  };
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer