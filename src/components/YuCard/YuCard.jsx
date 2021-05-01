import React from 'react';
import styleModule from './YuCard.module.css';

const YuCard = ({ text = 'Card' }) => {
  return (
    <div className={styleModule['card-container']}>
      <h3 className={styleModule['card-header']}>{text}</h3>
    </div>
  );
};

export default YuCard;
