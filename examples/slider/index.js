import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
// import Slider from '../../lib/slider';
import Slider from '../../src/component/slider';

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
        param: 'color',
        desc: '步骤条 color, 支持16进制和rgba, 非必须字段',
        type: 'string',
        default: '-',
      }, {
        param: 'value',
        desc: '设置当前取值, 注意: 此处输入框一定要为合理value, 比如, 假如此处min为20, max为50, step为6, 那么第一, value >=20 && value <=50, ' +
        '第二, 可输入值为 min + step * 整数, 即20, 26, 32, 38, 44, 50。这些条件需要调用者自行控制',
        type: 'number',
        default: '-',
      }, {
        param: 'defaultValue',
        desc: '设置初始取值',
        type: 'number',
        default: '0',
      }, {
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
      value: 25
    }
  }

  sliderChange(value) {
    console.log('--example--', value);
    this.setState({value})
  }

  changeField(e) {
    console.log('--手动修改--', e.target.value);
    let value = Number(e.target.value);
    this.setState({value,})
  }

  render() {
    return (
        <div>
          <Template options={options}>
            <div>
              <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, .1)",
                    padding: '8px', borderRadius: '5px', width: '500px', display: 'inline-block'
                  }}>
                <Slider onChange={(value) => this.sliderChange(value)} value={this.state.value} color="#1890ff"/>
              </div>
              <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: "10px"}}>
                value: {this.state.value}
                &nbsp;|&nbsp;
                手动输入: <input type="text" value={this.state.value}
                             style={{
                               width: "120px", height: "21px",
                               borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px",
                               borderTopLeftRadius: "3px", borderTopRightRadius: "3px",
                               outline: 'none', border: "1px solid rgba(0, 0, 0, .65)"
                             }}
                             placeholder="0~100之间" onChange={(e) => this.changeField(e)}/>
              </div>
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

