import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div>
      <h1 className="intro">Meow loader</h1>
      <div className="box">
        <div className="cat">
          <div className="cat__body"></div>
          <div className="cat__body"></div>
          <div className="cat__tail"></div>
          <div className="cat__head"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
