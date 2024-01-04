import React from 'react';

export const LoginResult = (
  { 
    formik, 
    captcha, 
    resultCode 
  } : {
    formik: any,
    captcha: string,
    resultCode: number | null,
  }
    ) => {
  if (resultCode === 1) {
    return <span>Введён неверный логин или пароль</span>;
  } else if (captcha || resultCode === 10) {
    return (
      <div>
        <div>
          <span>Введён неверный логин или пароль</span>
        </div>
        <div>
          <span>Защита от роботов</span>
          <img src={captcha} alt="captcha" />
          <input onChange={formik.handleChange} name="captcha" type="text" />
        </div>
      </div>
    );
  }
  return null;
};
