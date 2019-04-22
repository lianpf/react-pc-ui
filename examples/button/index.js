import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Button from '../../lib/button/index';
import '../template/index.less';

import Template from '../template/index';
import DemoPanel from '../template/demo-panel';

const options = {
  title: 'Button',
  desc: '按钮组件',
  func: 'onClick',
  params:[],
  api: [
    {
      name: 'Button 配置参数',
      dataSource: [{
        param: 'type',
        desc: '按钮大小 default、large、small',
        type: 'String',
        default: 'default',
      }, {
          param: 'bgColor',
          desc: '按钮背景色 16进制、RGB、颜色英文名称',
          type: 'String',
          default: '#DA3D42',
        },{
        param: 'color',
        desc: '按钮文本颜色 16进制、RGB、颜色英文名称',
        type: 'String',
        default: '#fff',
      },{
        param: 'disabled',
        desc: '按钮禁用状态 true、false',
        type: 'Boolean',
        default: 'false',
      },{
        param: 'radius',
        desc: '按钮圆角大小',
        type: 'Number',
        default: '20',
      },{
        param: 'fontSize',
        desc: '设置按钮字体大小',
        type: 'Number',
        default: '16',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('--button-onClick--');
  }

  render() {
    let componentStr = "{Button}";
    let _field="onClick={clickFunc}";
    let _braceLeft = "{";
    let _braceRight = "}";

    return (
        <Template options={options}>
          <Button onClick={this.onClick}>default button</Button>

          {/*代码展示*/}
          <div className={'showCoding'}>
            <div><span className={'highLightBlue'}>import</span> React <span className={'highLightBlue'}>from</span> 'react';</div>
            <div><span className={'highLightBlue'}>import</span> { componentStr } <span className={'highLightBlue'}>from</span> 'react-pc-ui';</div><br />

            <div>
              <span className={'highLightBlue'}>function</span> clickFunc(){_braceLeft} <br/>
              <div className={'textLeft'}>
                console.log('--button-onClick--');
              </div>
              {_braceRight}
            </div><br/>

            React.render(<br />
            <div className={'textLeft'}>
              &lt;<span className={'highLightRed'}>Button</span> {_field}&gt;
              default button
              &lt;/ <span className={'highLightRed'}>Button</span> &gt;
              , container);
            </div>
          </div>
        </Template>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

