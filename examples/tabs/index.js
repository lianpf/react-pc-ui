import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';

import Tabs from '../../src/component/tabs/index';

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
    console.log(key);
  }


  render() {
    return (
        <div>
          <Template options={options}>
            <div style={{border: "1px solid rgba(0, 0, 0, .1)", padding: '8px', borderRadius: '5px'}}>
              <Tabs defaultActiveKey="11" onChange={(key) => this.tabsChange(key)}>
                <TabPane tab="Tab 1" key="11">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="12">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="13">Content of Tab Pane 3</TabPane>
              </Tabs>
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

