import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('John Doe');

  function handleClick() {
    setShow(!show);
  }

  function handleInput(e) {
    if (e.key === 'Enter') {
      setName(e.target.value); // update name
      e.target.value = '';    // clear text input
    }
  }

  return (
    <>
      <p>
        <input type="text" onKeyDown={handleInput} />
      </p>
      <p>
        <button onClick={handleClick}>Toggle Show</button>
      </p>
      {/** this is like if statement */}
      {/* {show && <Effect name="John Doe" />}  */}

      {show ? <Effect /> : 'Oops!'} {/** ternary: if ... else */}
    </>
  );
}

function Effect() {
  const [status, setStatus] = useState('stopped');
  const [value, setValue] = useState(0);
  const timer = useRef();

  function handleStop(){
    setStatus('stopped');
    clearInterval(timer.current);
  }

  function handlePause() {

    if (status === 'running') {
      setStatus('paused');
      clearInterval(timer.current);
    } else {
      setStatus('running');
    }
    
  }

  function handleStart() {
    setValue(0);
    setStatus('running');
  }

  useEffect(() => {
    if (status === 'stopped' || status === 'paused') return;

    timer.current = setInterval(() => {
      setValue(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, [status]);

  return (
    <>
    <p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{status === 'paused' ? 'Resume' : 'Pause'}</button>
      <button onClick={handleStop}>Stop</button>
    </p>
    <span>{value}</span>
    </>
  );
}

export default App;
