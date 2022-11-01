import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from "./Re/Store"
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={Store}>
  <App/>
</Provider>,
document.getElementById('root')
);
