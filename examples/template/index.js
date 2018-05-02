import React, { Component, PropTypes } from 'react';

import './index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, desc, params} = this.props;
    return (
       <div className={`template-layout`}>
         {this.props.children}
       </div>
    );
  }
}

export default Index;

