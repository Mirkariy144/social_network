import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setId } from "../../Redux/AuthReducer"

const HeaderContainer = () => {
	const [authUser, setAuthUser] = useState(null);

	const dispatch = useDispatch()

	useEffect(() => {
		axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true })
			.then(responce => {
				setAuthUser(responce.data.data)
				dispatch(setId(responce.data.data.id))
			})
	}, [])

	if (!authUser) {
		<Loader />
	} 
	return (
		<Header authUser={authUser} />
	);
};

export default HeaderContainer