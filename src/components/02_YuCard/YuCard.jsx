import React from 'react';
import style from './YuCard.module.scss';

const YuCard = ({ text = 'Card' }) => {
  return (
    <div className={style['card-container']}>
      <h3 className={style['card-header']}>{text}</h3>
    </div>
  );
};

export default YuCard;
