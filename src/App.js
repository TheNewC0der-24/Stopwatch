import React, { useState } from 'react';
import Display from './Components/Display';
import Btn from './Components/Btn';
import './App.css';

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  return (
    <>
      <div className='main-section'>
        <div className="clock-holder">
          <div className="stopwatch">
            <Display time={time} />
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
