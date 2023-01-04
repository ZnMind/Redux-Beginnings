import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/counterSlice';
import { decimalActions } from './store/decimalSlice';
import './App.css'

function App() {
  const getCount = useSelector(state => state.num.counter);
  const getDbl = useSelector(state => state.num.dbl);
  const getDec = useSelector(state => state.div.dec);
  const getCustom = useSelector(state => state.num.custom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(decimalActions.divide(getCount))
    dispatch(counterActions.double())
  }, [getCount]);

  const increment = () => {
    dispatch(counterActions.increment())
  };

  const decrement = () => {
    dispatch(counterActions.decrement())
  };

  const addBy = () => {
    dispatch(counterActions.addBy(10))
  }
  
  const addX = () => {
    dispatch(counterActions.addBy(parseInt(getCustom)))
  }

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <h2>{getCount}</h2>
      <h3>{getDbl}</h3>
      <h4>{getDec}</h4>
      <div className='bc'>
        <button onClick={increment}>Up</button>
        <button onClick={decrement}>Down</button>
        <button onClick={addBy}>Add 10</button>
      </div>
      <div className='bc2'>
        <button onClick={addX}>{`Add ${getCustom}`}</button>
        <input onChange={e => dispatch(counterActions.customNum(e.target.value))}></input>
      </div>
    </div>
  );
}

export default App;