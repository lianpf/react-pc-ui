import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import Steps from '../../lib/steps/index';

const stepsParams = {
  current: 1,
  isFail: false,
  items: [
    {
      text: '第一步',
      // date: 1
    },
    {
      text: '第二步',
      // date: 2
    },
    {
      text: '第三步',
      // date: 3
    }
  ]
};

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
        param: 'isFail',
        desc: '最后一个步骤的状态',
        type: 'bool',
        default: 'false',
      }, {
        param: 'items',
        desc: '步骤条每一个item params组成的json array',
        type: 'json Array',
        default: '-',
      }]
    },
    {
      name: 'items item 配置参数',
      dataSource: [{
        param: 'text',
        desc: '描述',
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

  render() {
    return (
        <div>
          <Template options={options}>
            <div style={{border: "1px solid rgba(0, 0, 0, .1)", padding: '22px 8px 12px', borderRadius: '5px'}}>
              <Steps params={stepsParams} />
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

