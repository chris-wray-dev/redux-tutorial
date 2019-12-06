import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/countActions';

const Counter = (props) => {

  const increment = () => {
    props.increment();
  }

  const decrement = () => {
    props.decrement();
  }

  const reset = () => {
    props.reset();
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count.count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );

}

function mapState(state) {
  return {
    count: state.count
  }  
}

const mapDispatch = {
  increment,
  decrement,
  reset
}

export default connect(mapState, mapDispatch)(Counter);