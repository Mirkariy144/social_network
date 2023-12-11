import React from "react";
import Login from "./Login";
import { axiosLogin } from "../../API/API";
import { useAuth } from "../../React/CostomHooks/CastomHooks";

const LoginContainer = () => {
  
  const {loadUser} = useAuth()

  const login = (formData) => {
    axiosLogin(formData).then(data => {
      loadUser()
    })
  }

  return (
    <Login login={login}/>
  );
}

export default LoginContainer