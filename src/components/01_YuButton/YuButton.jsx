import React from 'react';
import style from './YuButton.module.scss';

const YuButton = ({ text = 'click me' }) => {
  return (
    <>
      <button className={style.button}>
        {text}
        <span className={style['button__icon']}>▼</span>
      </button>
    </>
  );
};

export default YuButton;
