import React, { Suspense, lazy, useEffect } from 'react';
import c from './Dialog.module.css';
import Loader from '../Loader/Loader';

const NameList = lazy(() => import('./NameList/NameList'));
const MessagesContainer = lazy(() => import('./Messages/MessagesContainer'));

const Dialogs = ({Characters}: {Characters: {id: number, name: string}[]}) => {
  return (
    <div className={c.wrapper}>
      <Suspense fallback={<Loader />}>
        <NameList Characters={Characters} />
        <MessagesContainer />
      </Suspense>
    </div>
  );
};

export default Dialogs;
