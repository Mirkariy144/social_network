import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux';

const ShitPost = ({ addPost, handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    addPost(data);
    dispatch(reset('ShitPost'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        component="textarea"
        name="newPostText"
        type="text"
        placeholder="Введите сюда ваш новый ShitPost"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default reduxForm({ form: 'ShitPost' })(ShitPost);
