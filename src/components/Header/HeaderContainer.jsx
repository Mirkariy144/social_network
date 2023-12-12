import React from 'react';
import Header from './Header';
import { axiosLogout } from '../../API/API';

const HeaderContainer = ({ auth }) => {
  const logout = () => {
    axiosLogout();
  };

  return <Header auth={auth} logout={logout} />;
};

export default HeaderContainer;
