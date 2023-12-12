import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import { useAuth } from '../../React/CostomHooks/CastomHooks';
import { axiosLogout } from '../../API/API';

export const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    axiosLogout();
    navigate('/login');
  };

  return (
    <>
      <Header user={user} logout={logout} />
      <NavBar id={user?.id} />
      <Outlet />
    </>
  );
};
