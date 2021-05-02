import './App.css';
import ButtonEclipse from './components/00_ButtonEclipse/ButtonEclipse';
import YuButton from './components/01_YuButton/YuButton';
import YuCard from './components/02_YuCard/YuCard';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Yu Libary</h2>
      <YuButton text={'Yu Button'} />
      <ButtonEclipse />
      <YuCard text={'Yu Card'} />
    </div>
  );
}

export default App;
