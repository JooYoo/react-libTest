import './App.css';
import YuButton from './components/YuButton/YuButton';
import YuCard from './components/YuCard/YuCard';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Yu Libary</h2>
      <YuButton text={'Yu Button'} />
      <YuCard text={'Yu Card'} />
    </div>
  );
}

export default App;
