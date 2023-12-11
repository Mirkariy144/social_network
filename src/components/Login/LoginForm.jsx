import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = ({ handleSubmit, login }) => {

  const onSubmit = (formData) => {
    login(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" >Логин:</label>
        <Field component="input" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <Field component="input" name="password" type="text" />
      </div>
      <div>
        <label htmlFor="rememberMe">Запомнить меня:  </label>
        <Field component="input" name="rememberMe" type="checkbox" />
      </div>
      <button>Login</button>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)