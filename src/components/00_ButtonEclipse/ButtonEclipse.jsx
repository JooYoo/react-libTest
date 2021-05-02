import React from 'react';
import style from './ButtonEclipse.module.css';

const ButtonEclipse = ({ text = '+' }) => {
  return (
    <>
      <button className={style.button}>{text}</button>
    </>
  );
};

export default ButtonEclipse;
