import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_ACTION } from '../../constants/counterAction';

function App() {
  const value = useSelector((x) => x.counter.value);
  const handleDispatch = useDispatch();
  const handleDispatchADD = () => handleDispatch({ type: COUNTER_ACTION.ADD });
  const handleDispatchDEL = () => handleDispatch({ type: COUNTER_ACTION.DEC });
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={handleDispatchADD}>Add</button>
        <button onClick={handleDispatchDEL}>DEL</button>
      </div>
    </div>
  );
}

export default App;
