import React from 'react';
import c from './Messages.module.css';
import { Field, InjectedFormProps, reduxForm, reset, FormSubmitHandler } from 'redux-form';
import { useDispatch } from 'react-redux';

interface MessagesProps {
  sendMessage: (data: { newMessage: string }) => void;
  Messages: { id: number; text: string }[];
}

interface kurwaMessages {
  newMessage: string
}

const Messages = ({ sendMessage, handleSubmit, Messages } : InjectedFormProps<kurwaMessages, MessagesProps> & MessagesProps) => {
  const dispatch = useDispatch();

  const onSubmit: FormSubmitHandler<kurwaMessages, MessagesProps> = (data) => {
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

export default reduxForm<kurwaMessages, MessagesProps>({ form: 'Messages' })(Messages);
