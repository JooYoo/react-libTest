import React from 'react';
import styleModule from './YuButton.module.css';

const YuButton = ({ text = 'click me' }) => {
  return (
    <>
      <button className={styleModule.button}>{text}</button>
    </>
  );
};

export default YuButton;
