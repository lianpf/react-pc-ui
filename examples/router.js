import React from 'react';
import { Router, Route, Switch } from 'react-router';


// 组件 button
const Button = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require('./button/index').default)
  }, 'button');
};

// 组件 table
const Table = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require('./table/index').default)
  }, 'table')
};


export default ({ history }) => (
    <Router history={history}>
      <Switch>
        <Route path="/button" component={Button}/>
        <Route path="/table" component={Table}/>
      </Switch>
    </Router>
)