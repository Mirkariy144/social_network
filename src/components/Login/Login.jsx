import React from "react";
import LoginForm from "./LoginForm";
import { axiosLogin } from "../../API/API";

const Login = ({ login }) => {

  return (
    <div>
      <LoginForm login={login} />
    </div>
  )
}

export default Login