import React, { Suspense, lazy, useEffect } from 'react';
// import NameList from './NameList/NameList';
import c from './Dialog.module.css';
import Loader from '../Loader/Loader';
// import MessagesContainer from './Messages/MessagesContainer';

const NameList = lazy(() => import('./NameList/NameList'));
const MessagesContainer = lazy(() => import('./Messages/MessagesContainer'));

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
      <Suspense fallback={<Loader />}>
        <NameList Characters={props.Characters} />
        <MessagesContainer />
      </Suspense>
    </div>
  );
};

export default Dialogs;
