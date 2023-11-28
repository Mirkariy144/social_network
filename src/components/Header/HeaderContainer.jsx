import React, { useEffect, useState } from "react";
import Header from "./Header";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setId } from "../../Redux/AuthReducer"
import { axiosGetProfile } from "../../API/API";

const HeaderContainer = () => {
	const [authUser, setAuthUser] = useState(null);

	const dispatch = useDispatch()

	useEffect(() => {
		axiosGetProfile().then(data => {
      setAuthUser(data)
      dispatch(setId(data.id))
    })
	}, [dispatch])

	if (!authUser) {
		<Loader />
	} 
	return (
		<Header authUser={authUser} />
	);
};

export default HeaderContainer