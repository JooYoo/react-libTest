/* eslint-disable import/no-anonymous-default-export */
import ButtonEclipse from './00_ButtonEclipse/ButtonEclipse.jsx';
import YuButton from './01_YuButton/YuButton.jsx';
import YuCard from './02_YuCard/YuCard.jsx';

const components = () => {
  return {
    YuButton: YuButton,
    ButtonEclipse: ButtonEclipse,
    YuCard: YuCard,
  };
};

export default components();
