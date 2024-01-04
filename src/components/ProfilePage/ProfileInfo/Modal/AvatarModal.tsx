import React, { useState } from 'react';
import Modal from 'react-modal';
import c from './Modal.module.css';

interface AvatarModalProps {
  setIsModalAvatarOpen?: (data: boolean) => void;
  isModalAvatarOpen?: boolean;
  putNewPhoto?: (data: any) => void;
}

export const AvatarModal: React.FC<AvatarModalProps> = ({
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
}) => {
  Modal.setAppElement('#root');

  const [formData, setFormData] = useState<FormData>(new FormData());

  const closeModal = () => {
    if (!setIsModalAvatarOpen) {
      return;
    }
    setIsModalAvatarOpen(false);
  };

  const onSubmit = () => {
    if (!putNewPhoto) {
      return;
    }
    putNewPhoto(formData);
  };

  const handleLargeFileChange = (event: any) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('image', file);
    setFormData(formData);
  };

  if (!isModalAvatarOpen) {
    return null;
  }

  return (
    <Modal
      className={c.Main}
      isOpen={isModalAvatarOpen}
      onRequestClose={closeModal}
      contentLabel="Окошко для смены аватара"
    >
      <div className={c.Forms}>
        <label htmlFor="large">Большой аватар: </label>
        <input name="large" type="file" onChange={handleLargeFileChange} />
        <button disabled={!formData} type="submit" onClick={onSubmit}>
          Сохранить
        </button>
      </div>
      <div className={c.Forms}>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </Modal>
  );
};
