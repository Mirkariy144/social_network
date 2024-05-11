import React, { Suspense, lazy, useEffect, useState } from 'react';
import { axiosCaptcha, axiosLogin } from '../../API/API';
import { useAuth } from '../../react/customHooks/CustomHooks';
import { useFormik } from 'formik';
import { validateEmail } from '../../formikUtils/formikLoginValidation';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

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

  const handleBlur = (e: React.FocusEvent<any, Element>) => {
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
      <Header />
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
