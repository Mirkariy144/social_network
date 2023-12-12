import React, { useEffect, useState } from 'react';
import Login from './Login';
import { axiosCaptcha, axiosLogin } from '../../API/API';
import { useAuth } from '../../React/CostomHooks/CastomHooks';

const LoginContainer = () => {
  const { loadUser } = useAuth();

  const [captcha, setCaptcha] = useState('');
  const [resultCode, setResultCode] = useState(null);

  const login = (formData) => {
    axiosLogin(formData).then((data) => {
      if (data.resultCode === 10) {
        axiosCaptcha().then((data) => {
          setCaptcha(data.url);
        });
      }
      setResultCode(data.resultCode);
      loadUser();
    });
  };

  return <Login login={login} captcha={captcha} resultCode={resultCode} />;
};

export default LoginContainer;
