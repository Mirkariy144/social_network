import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
const AboutMeModal = ({
  isModalAboutMeOpen,
  setIsModalAboutMeOpen,
  putInfoAboutMe,
  handleSubmit,
}) => {
  Modal.setAppElement('#root');

  const closeModal = () => {
    setIsModalAboutMeOpen(false);
  };

  const onSubmit = (data) => {
    debugger;
    putInfoAboutMe(data);
  };

  return (
    <Modal
      isOpen={isModalAboutMeOpen}
      onRequestClose={closeModal}
      contentLabel="Окно для смены инфорации о себе"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="fullName">Имя: </label>
          <Field component="input" name="fullName" type="text" />
        </>
        <>
          <label htmlFor="lookingForAJob">Ищу работу: </label>
          <Field component="input" name="lookingForAJob" type="checkbox" />
        </>
        <>
          <label htmlFor="lookingForAJobDescription">
            Смотрю предложения о работе:
          </label>
          <Field
            component="textarea"
            name="lookingForAJobDescription"
            type="text"
          />
        </>
        <>
          <label htmlFor="aboutMe">О себе: </label>
          <Field component="textarea" name="aboutMe" type="text" />
        </>
        <label htmlFor="contacts">Контакты: </label>
        <>
          <label htmlFor="contacts.facebook">Facebook: </label>
          <Field
            name="contacts.facebook"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.github">Github: </label>
          <Field
            name="contacts.github"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.instagram">Instagram: </label>
          <Field
            name="contacts.instagram"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.mainLink">MainLink: </label>
          <Field
            name="contacts.mainLink"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.twitter">Twitter: </label>
          <Field
            name="contacts.twitter"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.vk">VK: </label>
          <Field
            name="contacts.vk"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.website">Website: </label>
          <Field
            name="contacts.website"
            component="input"
            type="text"
            value={null}
          />
        </>
        <>
          <label htmlFor="contacts.youtube">Youtube: </label>
          <Field
            name="contacts.youtube"
            component="input"
            type="text"
            value={null}
          />
        </>
        <button onClick={closeModal}>Закрыть окно</button>
        <button type="submit">Сохранить</button>
      </form>
    </Modal>
  );
};

export default reduxForm({
  form: 'aboutMe',
})(AboutMeModal);
