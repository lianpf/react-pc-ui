
import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
import RouterConfig from './router.js';
import 'babel-polyfill';
import './styles/index.less'
ReactDOM.render(
  <RouterConfig/>
, document.getElementById('app'));