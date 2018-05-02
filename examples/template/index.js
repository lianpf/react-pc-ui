import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import './index.less';
import Table from '../../src/component/table';

const columns = [{
  title: '参数',
  dataIndex: 'param',
  key: 'param',
}, {
  title: '说明',
  dataIndex: 'desc',
  key: 'desc',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '默认值',
  dataIndex: 'default',
  key: 'default',
}];

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

          <h2>API</h2>
          {
            options.api.length && options.api.map((item, index) => {
              return (
                  <div key={`${item.name}-api-${index}`}>
                    <h4>{item.name}</h4>
                    <Table dataSource={item.dataSource} columns={columns} />
                  </div>
              );
            })
          }
          <Table />
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

