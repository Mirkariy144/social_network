import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { useAuth } from "../../React/CostomHooks/CastomHooks";

export const Layout = () => {

  const { user } = useAuth();

  return (
    <>
      <Header user={user} />
      <NavBar id={user?.id} />
      <Outlet />
    </>
  );
}