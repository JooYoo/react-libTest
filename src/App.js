import './App.css';
import ButtonEclipse from './components/00_ButtonEclipse/ButtonEclipse';
import YuButton from './components/01_YuButton/YuButton';
import YuCard from './components/02_YuCard/YuCard';
import { SiNintendoswitch } from 'react-icons/si';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Yu Libary</h2>
      <ButtonEclipse />
      <YuCard text={'Yu Card'} />
      <YuButton>
        <SiNintendoswitch color={'rgba(255,0,0,1)'} />
      </YuButton>
    </div>
  );
}

export default App;
