import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';

import Breadcrumb from '../../lib/breadcrumb/index';

const options = {
  title: 'Breadcrumb',
  desc: '显示当前页面在系统层级结构中的位置，并能向上返回',
  func: '-',
  params:[],
  api: [
    {
      name: 'Breadcrumb 配置参数',
      dataSource: [{
        param: 'paths',
        desc: '配置参数',
        type: 'object[]',
        default: '-',
      }]
    },
    {
      name: 'paths Item 配置参数',
      dataSource: [{
        param: 'url',
        desc: '跳转链接',
        type: 'string',
        default: '-',
      }, {
        param: 'text',
        desc: '展示文案',
        type: 'string',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      origin: window.location.origin
    })
  }
  getPaths = () => {
    return [
      {
        'path': `${this.state.origin}/#/component`,
        'text': '首页'
      },
      {
        'path': '',
        'text': '一级面包屑'
      },
      {
        'path': '',
        'text': '当前页面'
      }
    ];
  };

  
  render() {

    return (
        <div>
          <Template options={options}>
            <div style={{background: "rgba(0, 0, 0, .1)", padding: '8px', borderRadius: '5px'}}>
              <Breadcrumb paths={this.getPaths()} />
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

