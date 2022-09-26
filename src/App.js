import './App.css';
import Display from './Components/Display';
import Btn from './Components/Btn';

function App() {
  return (
    <>
      <div className='main-section'>
        <div className="clock-holder">
          <div className="stopwatch">
            <Display />
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
