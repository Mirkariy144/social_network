import React from "react";
import LoginForm from "./LoginForm";
import { axiosLogin } from "../../API/API";

const Login = ({ login, captcha, resultCode }) => {

  return (
      <LoginForm login={login} captcha={captcha} resultCode={resultCode}/>
  )
}

export default Login