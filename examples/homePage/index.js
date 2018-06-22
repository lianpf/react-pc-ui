import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';

import Tabs from '../../lib/tabs/index';

const TabPane = Tabs.TabPane;

const options = {
  title: 'Tabs',
  desc: '选项卡切换组件',
  func: '-',
  params:[],
  api: [
    {
      name: 'Tabs 配置参数',
      dataSource: [{
        param: 'activeKey',
        desc: '当前激活 tab 面板的 key',
        type: 'string',
        default: '-',
      }, {
        param: 'defaultActiveKey',
        desc: '初始化选中面板的 key，如果没有设置 activeKey',
        type: 'string',
        default: '第一个面板',
      }, {
        param: 'onChange',
        desc: '切换面板的回调',
        type: 'function(activeKey) {}',
        default: '-',
      }]
    },
    {
      name: 'Tabs.TabPane 配置参数',
      dataSource: [{
        param: 'key',
        desc: '对应 activeKey',
        type: 'string',
        default: '-',
      }, {
        param: 'tab',
        desc: '选项卡头显示文字',
        type: 'string|ReactNode',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  tabsChange(key) {
    console.log('--tabs-change--', key);
  }

  render() {
    return (
        <div>
          react-pc-library
        </div>
    );
  }
}

export default connect()(Index);

