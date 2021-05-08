import React from 'react';
import style from './YuButton.module.scss';

const YuButton = (props) => {
  const { text = 'click me', children } = props;

  return (
    <>
      <button className={style.btn}>
        <span className={style['btn__txt']}>{text}</span>
        <span className={style['btn__icon']}>{children}</span>
      </button>
    </>
  );
};

export default YuButton;
