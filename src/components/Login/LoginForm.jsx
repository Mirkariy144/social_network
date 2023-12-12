import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = ({ handleSubmit, login, captcha, resultCode}) => {

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
        <Field component="input" name="password" type="password" />
      </div>
      <div>
        <label htmlFor="rememberMe">Запомнить меня:  </label>
        <Field component="input" name="rememberMe" type="checkbox" />
      </div>
      <button>Login</button>
      <div>
        {resultCode === 1 && <span>Введён неверный логин или пароль</span>}
        {captcha && 
        <>
          <span>Защита от роботов</span>
          <img src={captcha} alt="captcha"/>
          <Field component="input" name="captcha" type="text" />
        </>
        }
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)