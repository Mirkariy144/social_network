import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './NameList.module.css';

const NameList = ({Characters}: {Characters: {id: number, name: string}[]}) => {
  let DialogsList = Characters.map(({ id, name }) => (
    <div className={c.Name} key={id}>
      <NavLink to={name}>{name}</NavLink>
    </div>
  ));

  return <div className={c.ChatSelector}>{DialogsList}</div>;
};

export default NameList;
