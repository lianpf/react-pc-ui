import React, { Component } from 'react';

import SuccessIcon from './img/check.png';
import InfoIcon from './img/infomation.png';
import ErrorIcon from './img/close.png';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration
    };
    this.dismiss = this.dismiss.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.getMsgType = this.getMsgType.bind(this);
  }

  componentDidMount() {
    const { duration } = this.props;
    if (duration > 0) {
      this.timeout = setTimeout(this.dismiss, duration * 1000);
    }
  }

  dismiss() {
    const {id, close, onClose} = this.props;
    close(id);
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  }

  handleMouseOver() {
    clearTimeout(this.timeout);
    this.setState({ duration: 0 });
  }

  getMsgType(type) {
    const styleArr = {
      success: {
        style: "react-pc-ui-message-success",
        icon: SuccessIcon,
      },
      info: {
        style: "react-pc-ui-message-info",
        icon: InfoIcon,
      },
      error: {
        style: "react-pc-ui-message-error",
        icon: ErrorIcon,
      }
    };
    return (
        <div className={`react-pc-ui-message-icon ${styleArr[type].style}`}>
          <img src={styleArr[type].icon} alt=""/>
        </div>
    );
  }

  render() {
    const { content, ...props } = this.props;
    // const { duration } = this.state;
    console.log('--props--', props);
    delete props.duration;

    return (
        <div className="react-pc-ui-message-common">
          <div className="react-pc-ui-message-content">
            {this.getMsgType(props.type)}
            {content}
          </div>
        </div>
    );
  }

}