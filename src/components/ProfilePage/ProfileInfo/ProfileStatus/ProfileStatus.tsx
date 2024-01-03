import React, { useEffect, useState } from 'react';

interface ProfileStatusProps {
  confirmStatusChanges: (inputValue: string) => void;
  cancelStatusChanges: () => void;
  editMode: boolean;
  status: string;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  authUserId: number;
  currentUserId: string;
}

export const ProfileStatus: React.FC<ProfileStatusProps> = ({
  confirmStatusChanges,
  cancelStatusChanges,
  editMode,
  status,
  setEditMode,
  authUserId,
  currentUserId,
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (editMode) {
      setInputValue(status);
    } else {
      setInputValue('');
    }
  }, [editMode, status]);

  const eventListener = (e: any) => {
    if (e.key === 'Enter') {
      confirmStatusChanges(inputValue);
    } else if (e.key === 'Escape') {
      cancelStatusChanges();
    }
  };

  const onStatusClick = () => {
    if (+currentUserId === authUserId) {
      setEditMode(!editMode);
    }
  };

  return (
    <>
      {!editMode ? (
        <span onDoubleClick={onStatusClick}>
          {status ? status : 'Show your status here'}
        </span>
      ) : (
        <input
          type="text"
          autoFocus={true}
          onBlur={() => confirmStatusChanges(inputValue)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          onKeyDown={(e) => eventListener(e)}
        ></input>
      )}
    </>
  );
};
