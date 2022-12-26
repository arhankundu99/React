import classes from './Counter.module.css';

import {useSelector, useDispatch} from 'react-redux'

import {incrementCounterAction, decrementCounterAction} from '../actions/counterAction';

const Counter = () => {

  // subscribe to the counter of the state. Now whenever the
  // counter value changes, useSelector would render the component
  const counter = useSelector((state) => state.counter);

  // dispatch function to dispatch actions
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    console.log("Dispatching increment action...")
    dispatch(incrementCounterAction())
  };

  const decrementCounterHandler = () => {
    dispatch(decrementCounterAction())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
    </main>
  );
};

export default Counter;
