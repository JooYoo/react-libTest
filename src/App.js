import './App.css';
import { ButtonEclipse } from './components/00_ButtonEclipse/ButtonEclipse';
import YuButton from './components/YuButton/YuButton';
import YuCard from './components/YuCard/YuCard';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Yu Libary</h2>
      <YuButton text={'Yu Button'} />
      <YuCard text={'Yu Card'} />
      <ButtonEclipse text={'ni'} />
    </div>
  );
}

export default App;
