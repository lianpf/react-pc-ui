import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


// 组件 button
// const Button = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./button/index').default)
//   }, 'button');
// };

// 组件 table
// const Table = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./table/index').default)
//   }, 'table')
// };

import Button from './button/index';
import Table from './table/index';

export default () => (
    <Router>
      <Switch>
        <Route path="/button" component={Button}/>
        <Route path="/table" component={Table}/>
        <Route component={Button}/>
      </Switch>
    </Router>
)