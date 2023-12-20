import React, { useEffect, useState } from 'react';
import { ProfileStatus } from './ProfileStatus';
import { axiosGetStatus, axiosPutStatus } from '../../../../API/API';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../React/CostomHooks/CastomHooks';
import Loader from '../../../Loader/Loader';

export const ProfileStatusContainer = () => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axiosGetStatus(id).then((data) => {
      setStatus(data ? data : '');
    });
  }, [id]);

  const confirmStatusChanges = (inputValue) => {
    setStatus(inputValue);
    setEditMode(false);
    axiosPutStatus(inputValue);
  };

  const cancelStatusChanges = () => {
    setEditMode(false);
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <ProfileStatus
      confirmStatusChanges={confirmStatusChanges}
      cancelStatusChanges={cancelStatusChanges}
      editMode={editMode}
      status={status}
      setEditMode={setEditMode}
      authUserId={user.id}
      currentUserId={id}
    />
  );
};
