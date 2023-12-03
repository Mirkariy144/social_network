import React, { useEffect } from "react";
import Header from "./Header";
import { connect, useSelector } from "react-redux";
import { getUserThunkCreator } from "../../Redux/AuthReducer";
import { useNavigate } from "react-router-dom";

const HeaderContainer = ({AuthUser, getUserThunkCreator}) => {

	useEffect(() => {
		getUserThunkCreator()

	}, [AuthUser, getUserThunkCreator])
 
	return (
		<Header authUser={AuthUser} />
	);
};

let mapStateToProps = (state) => {
  return {
    AuthUser: state.Auth
  }
}

export let HeaderConnector = connect(mapStateToProps, {getUserThunkCreator})(HeaderContainer)

export default HeaderContainer