import React, { useEffect, useState } from 'react';
import Login from './Login';
import { axiosCaptcha, axiosLogin } from '../../API/API';
import { useAuth } from '../../React/CostomHooks/CastomHooks';
import { useFormik } from 'formik';
import { validateEmail } from '../../FormikUtils/FormikLoginValidation';

const LoginContainer = () => {
  const { loadUser } = useAuth();
  const [captcha, setCaptcha] = useState('');
  const [resultCode, setResultCode] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validate: validateEmail,
    onSubmit: (formData) => {
      axiosLogin(formData).then((data) => {
        if (data.resultCode === 10) {
          axiosCaptcha().then((data) => {
            setCaptcha(data.url);
          });
        }
        setResultCode(data.resultCode);
        loadUser();
      });
    },
  });

  const handleBlur = (e) => {
    formik.setFieldTouched(e.target.name, true);
  };

  // const login = (formData) => {
  //   axiosLogin(formData).then((data) => {
  //     if (data.resultCode === 10) {
  //       axiosCaptcha().then((data) => {
  //         setCaptcha(data.url);
  //       });
  //     }
  //     setResultCode(data.resultCode);
  //     loadUser();
  //   });
  // };

  return (
    <Login
      formik={formik}
      captcha={captcha}
      resultCode={resultCode}
      handleBlur={handleBlur}
    />
  );
};

export default LoginContainer;
