import React, { FC } from 'react';

const BULK_UNIT = 10;
type Props = {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
};

// CounterBoard の表示の部分
const CounterBoard: FC<Props> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <>
    <p>count: {count}</p>
    <button type="button" onClick={decrement}>
      -1
    </button>
    <button type="button" onClick={increment}>
      +1
    </button>
    <button type="button" onClick={() => add(BULK_UNIT)}>
      +{BULK_UNIT}
    </button>
  </>
);
export default CounterBoard;
