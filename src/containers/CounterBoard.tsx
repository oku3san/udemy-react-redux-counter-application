import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action の import
import { add, increment, decrement } from '../actions';
import { CounterState } from '../reducers/index';
import CounterBoard from '../components/CounterBoard';

// CounterBoard の処理の部分
const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
