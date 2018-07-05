import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
// import Steps from '../../lib/steps/index';
import Steps from '../../src/component/steps/index';
let Step =  Steps.Step;

const options = {
  title: 'Steps',
  desc: '步骤条 引导用户按照流程完成任务的导航条',
  func: '-',
  params: [],
  api: [
    {
      name: 'Steps 配置参数',
      dataSource: [{
        param: 'current',
        desc: '指定当前步骤，从0开始记数',
        type: 'number',
        default: '0',
      }, {
        param: 'status',
        desc: '指定当前步骤的状态,可选 wait、finish、error',
        type: 'string',
        default: 'wait',
      }, {
        param: 'size',
        desc: '指定大小，目前支持普通（default）和迷你（small）',
        type: 'string',
        default: 'default',
      }]
    },
    {
      name: 'Steps.Step 配置参数(步骤条内的每一个步骤)',
      dataSource: [{
        param: 'text',
        desc: '描述',
        type: 'string',
        default: '-',
      }, {
        param: 'status',
        desc: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait、finish、error',
        type: 'string',
        default: 'wait',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Template options={options}>
            <div style={{border: "1px solid rgba(0, 0, 0, .1)", padding: '22px 8px 12px', borderRadius: '5px'}}>
              <div style={{width: '50%'}}>
                <Steps status='error' current={2} size="small">
                  <Step text="第一步" />
                  <Step text="第二步" />
                  <Step text="第三步" />
                </Steps>
              </div>
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

