import React from 'react';
import PropTypes from 'prop-types';
import names from 'classnames'

export default class CountDown extends React.Component {
  static defaultProps = {
    duration: 60,
    defaultText: '发送短信验证码',
    countingText: '__TIME__s',
    disabledClassName: 'disabled',
    className: '',
    onEnd: ()=>{},
    onStart: ()=>{},
    highestLevelState: -1,
  }

  static propTypes = {
    duration: PropTypes.number,
    defaultText: PropTypes.string,
    countingText: PropTypes.string,
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    onEnd: PropTypes.func,
    onStart: PropTypes.func,
    onClick: PropTypes.func,
  }

  constructor(props){
    super(props);
    this.state = {
      seconds: props.duration + 1,
      status: 'stopped',
      highestLevelState: props.highestLevelState
    };
    this.tick = this.tick.bind(this)
    this.onClick = this.onClick.bind(this)
    this.highestLevelFunc = this.highestLevelFunc.bind(this);
  }

  tick(){
    if(this.state.seconds - 1 > 0) {
      this.setState({
        seconds: this.state.seconds - 1,
        status: 'counting'
      })
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.tick()
      }, 1000)
    }else{
      this.setState({
        seconds: this.props.duration + 1,
        status: 'stopped',
        highestLevelState: 'stop'
      })
      this.timer && clearTimeout(this.timer);
      console.log("--children-tick-onEnd--");
      console.log("--children-tick-this.props.onEnd--", this.props.onEnd);
      this.props.onEnd && this.props.onEnd()
    }
  }

  /***
   * 提供回调供外部调用，返回值为true 或者在返回的Promise resolve后开始倒计时
   */
  onClick(){
    let {
      status
    } = this.state;
    let {
      onStart,
      onClick
    } = this.props;

    if(onClick) {
      if(status === 'counting') return onClick(status);
      this.tick();
      onStart && onStart()
    }else{
      if(status === 'counting') return;
      this.tick();
      onStart && onStart()
    }
  }
  /***
   * highestLevelState 最高优先级状态位
   * start 开始
   * stop 结束
   * -1 不自动执行
   */
  componentDidMount() {
    const { highestLevelState } = this.state;
    this.highestLevelFunc(highestLevelState);
  }
  componentWillReceiveProps (nextProps) {
    nextProps !== this.props && this.setState({
      ...this.state,
      ...nextProps
    }, () => {
      this.highestLevelFunc(this.state.highestLevelState);
    })
  }
  highestLevelFunc(highestLevelState) {
    if ( highestLevelState === '-1') {
      return;
    }
    if (highestLevelState === 'start') {
      this.tick();
    }
    if (highestLevelState === 'stop') {
      clearTimeout(this.timer);
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  render(){
    let {
      className,
      disabledClassName,
      defaultText,
      countingText,
      highestLevelState
    } = this.props;
    let {
      seconds,
      status
    } = this.state
    return (
        <span
            className={names(className, status === 'counting' && disabledClassName)}
            onClick={this.onClick}
        >
        {
          status === 'stopped' ? defaultText : countingText.replace('__TIME__', seconds)
        }
      </span>
    )
  }

}
