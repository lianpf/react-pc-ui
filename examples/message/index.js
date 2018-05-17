import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import Message from '../../lib/message';
import Button from '../../lib/button';

const options = {
  title: 'Message',
  desc: '全局提示组件',
  func: 'onClose',
  params:[],
  api: [
    {
      name: 'message 类型',
      dataSource: [{
        param: 'message.success',
        desc: '成功message',
        type: '-',
        default: '-',
      }, {
        param: 'message.info',
        desc: '提示 message',
        type: '-',
        default: '-',
      }, {
          param: 'message.error',
          desc: '错误 message',
          type: '-',
          default: '-',
        }]
    },
    {
      name: 'message 配置参数',
      dataSource: [{
        param: 'content',
        desc: '提示内容',
        type: 'string',
        default: '-',
      }, {
        param: 'duration',
        desc: '自动关闭的延时，单位秒。设为 0 时不自动关闭',
        type: 'number',
        default: '5',
      }, {
        param: 'onClose',
        desc: '关闭时触发的回调函数',
        type: 'Function',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  showMessage() {
    Message.error("I am message", () => {
      console.log('See! I am the action after close message!')
    });
  }

  render() {
    return (
        <div>
          <Template options={options}>
            <Button onClick={() => this.showMessage()}>open message </Button>
          </Template>
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

