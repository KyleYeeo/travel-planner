import './App.css';
import { TravelPlan } from './components/TravelPlan';

function App() {
  return (
    <div className='App'>
      <img className='bg' src={`./images/background.jpg`} alt='Background' />
      <div className='container'>
        <h1>TRAVEL PLAN</h1>
        <TravelPlan />
      </div>
    </div>
  );
}

export default App;
