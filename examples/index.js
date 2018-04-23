import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './config'
import Routes from './router';
// import configure from './store/configureStore'

//
const store = {};

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('root'),
);
