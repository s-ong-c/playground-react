import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number, []);

  //const [onIncrement, onDecrement] = useDispatch([increment, decrement], []);
  const dispatch = useDispatch();
  const onIncrement = useCallback(() => dispatch(increase(), [dispatch]));
  const onDecrement = useCallback(() => dispatch(decrease(), [dispatch]));

  return (
    <Counter
      number={number}
      onIncrease={onIncrement}
      onDecrease={onDecrement}
    />
  );
};

export default CounterContainer;
