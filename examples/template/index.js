import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import './index.less';


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options } = this.props;
    return (
        <div className={`show-example-layout`}>
          <h1>{options.title}</h1>
          <p>描述: {options.desc}</p>
          <h2>func</h2>
          <p>{options.func}</p>
          <h2>效果展示</h2>
          {this.props.children}
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

