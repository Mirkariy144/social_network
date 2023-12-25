import React from 'react';
import c from './Messages.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux';

const Messages = ({ sendMessage, handleSubmit, Messages }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    sendMessage(data);
    dispatch(reset('Messages'));
  };

  let RenderMessage = Messages.map(({ id, text }) => (
    <pre key={id}>{text}</pre>
  ));

  return (
    <div className={c.MessageText}>
      <div>{RenderMessage}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="newMessage" component="textarea" type="text" />
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'Messages' })(Messages);
