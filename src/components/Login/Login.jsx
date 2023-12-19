import React from 'react';
import { LoginResult } from './LoginResult';

const Login = ({ formik, captcha, resultCode, handleBlur }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          type="email"
          onBlur={handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Пароль: </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          type="password"
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me: </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
          name="rememberMe"
          type="checkbox"
        />
      </div>
      <LoginResult formik={formik} resultCode={resultCode} captcha={captcha} />
      <button disabled={formik.isSubmitting} type="submit">
        Вход
      </button>
    </form>
  );
};

export default Login;
