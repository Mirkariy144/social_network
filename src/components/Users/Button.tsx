import React from 'react';
import c from './Users.module.css';
import { Button } from '@mui/material';

export let ButtonFolow = ({
  title,
  onClick,
  id,
  followingId,
}: {
  title: string;
  onClick: () => void;
  id: number;
  followingId: number[];
}) => {
  return (
    <Button
      disabled={followingId?.some((item) => item === id)}
      className={c.Follow}
      onClick={onClick}
      size="medium"
    >
      {title}
    </Button>
  );
};
