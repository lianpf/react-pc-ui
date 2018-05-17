import React from 'react';
import ReactDOM from 'react-dom';
import { nextUid } from '../../utils/index';
import Container from './container';
import './message.less';

const div = document.createElement('div');
document.body.appendChild(div);

// init 数据
const getInitParams = () => {
  return {
    id: nextUid(),
    content: '',
    duration: 5,
    onClose: void 0
  }
};

// 策略模式 根据参数匹配
const createMsgParams = {
  0: (args) => {
    return getInitParams()
  },
  1: (args) => {
    if (typeof args[0] === 'string') {
      return {
        ...getInitParams(),
        content: args[0],
      }
    } else {
      return getInitParams()
    }
  },
  2: (args) => {
    if (typeof args[0] === 'string' && typeof args[1] === "number") {
      return {
        ...getInitParams(),
        content: args[0],
        duration: args[1],
      }
    } else if (typeof args[0] === 'string' && typeof args[1] === "function"){
      return {
        ...getInitParams(),
        content: args[0],
        onClose: args[1],
      }
    } else {
      return getInitParams()
    }
  },
  3: (args) => {
    if (typeof args[0] === 'string' && typeof args[1] === "number" && typeof args[2] === "function") {
      return {
        ...getInitParams(),
        content: args[0],
        duration: args[1],
        onClose: args[2]
      }
    } else {
      return getInitParams()
    }
  },
};

function create(type) {
  return (...args) => {
    const msg = createMsgParams[args.length](args);
    ReactDOM.render(<Container />, div).addMessage({type, ...msg});
  };
}

export default {
  /**
   * 接口弹出信息的不同类型
   * */
  success: create('success'),
  info: create('info'),
  error: create('error')
}