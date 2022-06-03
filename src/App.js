import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [min, setMin] = useState('25');
  const [sec, setSec ] = useState('00');
  const [timeLeft, setTimeLeft] = useState(`${min}:${sec}`);
  const [minCount, setMinCount] = useState('');
  const [secCount, setSecCount] = useState('');

  //const [, ] = useState();
  useEffect(() => {
    setBreakLength(5)
    setSessionLength(25)
    setMin('25')
    setSec('00')
  }, [])

  useEffect(() => {
    updateTimeLeft();
  }, [min, sec]);

  const updateTimeLeft = () => {
    setTimeLeft(`${min}:${sec}`);
  }

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setMin('25');
    setSec('00');
  }

  const timer = () => {
    if (sec === '00') {
      setSec('70')
    }
  }

    const handleIncrement = (e) => {
    if (e.target.name === 'break' && breakLength < 60) {
      setBreakLength(breakLength+1);
    } else if (e.target.name === 'session' && sessionLength < 60) {
      setSessionLength(sessionLength+1);
    }
  }
  const handleDecrement = (e) => {
    if (e.target.name === 'break' && breakLength > 1) {
      setBreakLength(breakLength-1);
    }else if (e.target.name === 'session' & sessionLength > 1) {
      setSessionLength(sessionLength-1);
    }
  }

    return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button
        id="break-decrement"
        name="break"
        onClick={(event)=>{handleDecrement(event)}}
      >Break dec</button>
      <button
        id="session-decrement"
        name="session"
        onClick={(event)=>{handleDecrement(event)}}
      >Session dec</button>
      <button
        id="break-increment"
        name="break"
        onClick={(event)=>{handleIncrement(event)}}
      >Break Inc</button>
      <button
        id="session-increment"
        name="session"
        onClick={(event)=>{handleIncrement(event)}}
      >Session Inc</button>
      <div id="break-length">{breakLength}</div>
      <div id="session-length">{sessionLength}</div>
      <div id="timer-label">Session</div>
      <div id="time-left">{timeLeft}</div>
      <button
        id="start_stop"
        onClick={()=>{timer()}}
      >StartStop</button>
      <button
        id="reset"
        onClick={()=>{handleReset()}}
      >
        Reset
      </button>
    </div>
  )
}

export default App;
