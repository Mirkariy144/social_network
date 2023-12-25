import React, { Suspense, lazy, useEffect, useState } from 'react';
// import Login from './Login';
import { axiosCaptcha, axiosLogin } from '../../API/API';
import { useAuth } from '../../React/CustomHooks/CustomHooks';
import { useFormik } from 'formik';
import { validateEmail } from '../../FormikUtils/FormikLoginValidation';
import Loader from '../Loader/Loader';

const Login = lazy(() => import('./Login'));

const LoginContainer = () => {
  const { loadUser } = useAuth();
  const [captcha, setCaptcha] = useState('');
  const [resultCode, setResultCode] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validate: validateEmail,
    onSubmit: (formData) => {
      setIsSubmitting(true);
      axiosLogin(formData).then((data) => {
        if (data.resultCode === 10) {
          axiosCaptcha().then((data) => {
            setCaptcha(data.url);
          });
        }
        setResultCode(data.resultCode);
        loadUser();
        setIsSubmitting(false);
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
    <Suspense fallback={<Loader />}>
      <Login
        formik={formik}
        captcha={captcha}
        resultCode={resultCode}
        handleBlur={handleBlur}
        isSubmitting={isSubmitting}
      />
    </Suspense>
  );
};

export default LoginContainer;
