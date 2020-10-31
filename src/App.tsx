import React, { FC } from 'react';
import CounterBoard from './containers/CounterBoard';

// containers/CounterBoard を呼び出している
const App: FC = () => (
  <div>
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <CounterBoard />
  </div>
);

export default App;
