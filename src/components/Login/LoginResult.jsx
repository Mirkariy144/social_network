import React from 'react';

export const LoginResult = ({ formik, captcha, resultCode }) => {
  if (resultCode === 1) {
    return <span>Введён неверный логин или пароль</span>;
  } else if (captcha) {
    return (
      <div>
        <span>Защита от роботов</span>
        <img src={captcha} alt="captcha" />
        <input onChange={formik.handleChange} name="captcha" type="text" />
      </div>
    );
  } else {
    return null;
  }
};
