import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action'

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
