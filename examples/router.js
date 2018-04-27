import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


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
import Layout from './layout/index';

export const routes = [
  {path: '/', exact: true, component: Layout, type: 'sync' },
]


export default () => (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/component"/>)}/>
        <Route path="/component" component={Layout}/>
        <Route component={Layout}/>
      </Switch>
    </Router>
)