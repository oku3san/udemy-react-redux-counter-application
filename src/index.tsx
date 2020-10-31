import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import { counterReducer, initialState } from './reducers';
import App from './App';

const store = createStore(counterReducer, initialState);

// App.tsx を呼び出している
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
