import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import { useAuth } from '../../react/customHooks/CustomHooks';
import { axiosLogout } from '../../API/API';
import Loader from '../Loader/Loader';

export const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { loading } = useAuth();

  const logout = () => {
    axiosLogout();
    navigate('/login');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header user={user} logout={logout} />
      {user?.id && (
        <NavBar id={user?.id} />
      )}
      <Outlet />
    </>
  );
};
