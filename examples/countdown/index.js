import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import Steps from '../../lib/steps/index';
import './index.less';
import '../utils/common.less';

// import Countdown from '../../src/component/countdown';
import Countdown from '../../lib/countdown';

const options = {
  title: 'Countdown',
  desc: '倒计时',
  func: '-',
  params: [],
  api: [
    {
      name: 'Countdown 配置参数',
      dataSource: [{
        param: 'highestLevelState',
        desc: '最高优先级状态位, 状态位 -1不自动执行, start开始, stop结束',
        type: 'string',
        default: '-1',
      },{
        param: 'className',
        desc: '容器类名-可点击状态',
        type: 'string',
        default: '-',
      }, {
        param: 'disabledClassName',
        desc: '容器类名-不可点击状态',
        type: 'string',
        default: '-',
      }, {
        param: 'duration',
        desc: '倒计时时长, 单位s',
        type: 'number',
        default: '60',
      },{
        param: 'countingText',
        desc: '倒计时展示文案 {duration}+{countingText}',
        type: 'number',
        default: '60',
      }, {
        param: 'defaultText',
        desc: '默认展示文案',
        type: 'string',
        default: '发送短信验证码',
      },{
        param: 'onClick',
        desc: '点击回调, 状态有两种, counting倒计时进行中状态, stopped倒计时结束状态',
        type: 'function(status)',
        default: '-',
      },{
        param: 'onStart',
        desc: '开始倒计时回调',
        type: 'function',
        default: '-',
      },{
        param: 'onEnd',
        desc: '结束倒计时回调',
        type: 'function',
        default: '-',
      }]
    }
  ]
};


let getBrace = (props) => {
  return (
      <span>"{"{props.children}"}"</span>
  )
};

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.clickFunc = this.clickFunc.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  onStart() {
    console.log('--parent-start---')
  }
  onEnd() {
    console.log('--parent-end---')
  }
  clickFunc(status) {
    console.log('--parent-click---', status);
    if(status === 'stopped') return false;
  }

  render() {

    let componentStr = "{Countdown}";
    let _className="className={'button'}";
    let _disabledClassName="disabledClassName={'disabledButton'}";
    let _duration="duration={10}";
    let _countingText="countingText={'__TIME__s后再次获取'}";
    let _highestLevelState="highestLevelState={'-1'}";
    let _onClick="onClick={this.clickFunc}";
    let _onStart="onStart={this.onStart}";
    let _onEnd="onEnd={this.onEnd}";



    return (
        <div>
          <Template options={options}>
            <div style={{border: "1px solid rgba(0, 0, 0, .1)", padding: '22px 8px 12px', borderRadius: '5px'}}>
              <Countdown
                  className={'button'}
                  disabledClassName={'disabledButton'}
                  duration={10}
                  countingText={'__TIME__s后再次获取'}
                  highestLevelState={"-1"}
                  onClick={this.clickFunc}
                  onStart={this.onStart}
                  onEnd={this.onEnd}
              />
            </div>

            {/*代码展示*/}
            <div className={'showCoding'}>
              <div><span className={'highLightBlue'}>import</span> React <span className={'highLightBlue'}>from</span> 'react';</div>
              <div><span className={'highLightBlue'}>import</span> { componentStr } <span className={'highLightBlue'}>from</span> 'react-pc-ui';</div><br />
              React.render(<br />
              <div className={'textLeft'}>
                &lt; <span className={'highLightRed'}>Countdown</span>  <br />
                <div className={'textLeft'}>{_className}</div>
                <div className={'textLeft'}>{_disabledClassName}</div>
                <div className={'textLeft'}>{_duration}</div>
                <div className={'textLeft'}>{_countingText}</div>
                <div className={'textLeft'}>{_highestLevelState}</div>
                <div className={'textLeft'}>{_onClick}</div>
                <div className={'textLeft'}>{_onStart}</div>
                <div className={'textLeft'}>{_onEnd}</div>
                /&gt;, container);
              </div>
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

