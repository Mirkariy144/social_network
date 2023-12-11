import React from "react";
import Login from "./Login";
import { axiosGetProfile, axiosLogin } from "../../API/API";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../React/CostomHooks/CastomHooks";

const LoginContainer = () => {

  const navigate = useNavigate();

  const login = (formData) => {
    axiosLogin(formData).then(data => {
      const id = data.data.userId
      navigate(`/profile/${id}`)
    })
  }

  return (
    <Login login={login}/>
  );
}

export default LoginContainer