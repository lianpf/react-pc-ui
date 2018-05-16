import React from 'react';
import ReactDOM from 'react-dom';
import { nextUid } from '../../utils/index';
import Container from './container';
import './message.less';

const div = document.createElement('div');
document.body.appendChild(div);

function create(type) {
  return (content, msg = {}) => {
    if (typeof msg === 'string') {
      msg = { type: msg };
    }
    if (type) {
      msg.type = type;
    }

    msg.id = nextUid();
    msg.content = content;
    if (msg.duration !== undefined) {
      msg.duration = msg.duration;
    } else if (msg.type === 'error' || msg.type === 'danger') {
      msg.duration = 0; // 如果类型是error, danger这信息不回消失
    } else {
      msg.duration = 5;
    }
    /*
    msg = {
      id:
      duration: 显示时长,
      content: 显示的内容,
      type: 信息的类型
    }
    */
    ReactDOM.render(<Container />, div).addMessage(msg);
  };
}

export default {
  show: create()
  /*
  保留接口弹出信息的不同类型
  success: create('success'),
  info: create('info'),
  warning: create('warning'),
  error: create('error')
  */
};