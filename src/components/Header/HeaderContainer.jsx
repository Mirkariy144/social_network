import React from "react";
import Header from "./Header";

const HeaderContainer = ({auth}) => {
	return (
		<Header auth={auth}/>
	);
};

export default HeaderContainer;
