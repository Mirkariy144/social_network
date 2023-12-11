import React from "react";
import LoginForm from "./LoginForm";
import { axiosLogin } from "../../API/API";

const Login = ({ login }) => {

  return (
      <LoginForm login={login} />
  )
}

export default Login