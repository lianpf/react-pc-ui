import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';

import Slider from '../../src/component/slider/index';
// import Tabs from '../../lib/tabs/index';
//
// const TabPane = Tabs.TabPane;

const options = {
  title: 'Slider',
  desc: '滑动输入条 & 进度条',
  func: 'onChange',
  params: [],
  api: [
    {
      name: 'Slider 配置参数',
      dataSource: [{
        param: 'vertical(此field暂不可用)',
        desc: '值为 true 时，Slider 为垂直方向',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'disabled',
        desc: '值为 true 时，滑块为不可滑动状态, 纯展示作用',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'max',
        desc: '最大值',
        type: 'number',
        default: '100',
      }, {
        param: 'min',
        desc: '最小值',
        type: 'number',
        default: '0',
      }, {
        param: 'step',
        desc: '步长，取值必须大于 0，并且可被 (max - min) 整除',
        type: 'number',
        default: '1',
      }, {
        param: 'value',
        desc: '设置当前取值',
        type: 'number',
        default: '-',
      }, {
        param: 'defaultValue',
        desc: '设置初始取值',
        type: 'number',
        default: '0',
      },{
        param: 'onChange',
        desc: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入',
        type: 'Function(value)',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 35
    }
  }

  tabsChange(key) {
    console.log('--tabs-change--', key);
  }
  sliderChange(value) {
    console.log('--example--', value);
    this.setState({value})
  }

  render() {
    return (
        <div>
          <Template options={options}>
            <div
                style={{border: "1px solid rgba(0, 0, 0, .1)",
                  padding: '8px', borderRadius: '5px', width: '500px', display: 'inline-block'}}>
              <Slider onChange={(value) => this.sliderChange(value)}/>
            </div>
            <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: "10px"}}>value: {this.state.value}</div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

