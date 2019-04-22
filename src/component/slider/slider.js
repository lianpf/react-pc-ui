import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import names from 'classnames'
import './index.less';

// import TabPane from './TabPane';

const prefixCls = 'react-pc-ui-slider';

export default class Index extends React.Component{
  static defaultProps = {
    vertical: false,
    disabled: false,
    max: 100,
    min: 0,
    step: 1,
    value: void 0,
    defaultValue: 50,
    onChange: () => {},
  };
  //
  // static propTypes = {
  //   activeKey: PropTypes.string,
  //   defaultActiveKey: PropTypes.string,
  //   onChange: PropTypes.func
  // };
  constructor(props) {
    super(props);

    const defaultValue = props.defaultValue !== undefined ?
        props.defaultValue : props.min;
    const value = props.value !== undefined ?
        props.value : defaultValue;

    this.state = {
      parentBasicX: 0,
      parentWidthCount: 0,
      previewState: 0,
      currentState: 0,
      previewValue: props.min,
      currentValue: props.min,
      defaultValue,
      value,
    };
    this.countPosition = this.countPosition.bind(this);
    this.isLegal = this.isLegal.bind(this);
  }

  componentDidMount() {
    let event = this.refs['sliderH'];
    let t = 0;
    let l = 0;
    let parentWidthCount = event.offsetWidth;
    const self = this;

    while (event = event.offsetParent) {
      t += event.offsetTop;
      l += event.offsetLeft;
    };
    this.setState({
      parentBasicX: l,
      parentWidthCount,
    });

    const _bool = this.isLegal(self.state.value);
    if (!_bool) {
      return;
    }
    this.countPosition(self.state.value);
  }

  componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    const prevValue = this.state.value;
    const value = nextProps.value !== undefined ?
        nextProps.value : prevValue;
    if (value === prevValue) return;

    const _bool = this.isLegal(value);
    if (!_bool) {
      return;
    }

    this.setState({
      value: value
    }, () => {
      this.countPosition(value);
    });
  }

  handleTooltipVisibleChange(e) {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    let sliderH = this.refs['sliderH'];
    let children = sliderH.getElementsByTagName('div');
    let clickX = e.pageX;
    let {parentBasicX, parentWidthCount, previewValue} = this.state;
    let {max, min, step} = this.props;

    let roundTimes = Math.round((clickX - parentBasicX) * (max - min ) / (step * parentWidthCount));
    let currentValue = Number(min) + Number(roundTimes * step);
    let percentWidth =  roundTimes * step / (max -min) * 100;
    children[0].style.width = `${percentWidth}%`;
    children[1].style.left = `${percentWidth}%`;

    this.setState({
      value: currentValue,
    }, () => {
      this.props.onChange(this.state.value);
    })
  }

  // 判断value是否合理
  isLegal(value) {
    // 不合理的值
    let {max, min, step} = this.props;
    const _bool = value <= max && value >= min && ((value - min) % step === 0);
    if (!_bool) {
      return false;
    }
    return true;
  }

  // 根据传入value 计算position
  countPosition(value) {
    let {max, min, step} = this.props;
    let percentWidth = (value - min) / (max - min) * 100;
    let sliderH = this.refs['sliderH'];
    let children = sliderH.getElementsByTagName('div');
    children[0].style.width = `${percentWidth}%`;
    children[1].style.left = `${percentWidth}%`;

    this.props.onChange(value);
  }

  render(){
    const { disabled } = this.props;
    let hasColor = !!(this.props.color && this.props.color.length > 0);
    return (
        <div className={`${prefixCls}`}>
          <div className={`${prefixCls}-h`}
               ref="sliderH"
               onMouseDown={(event) => this.handleTooltipVisibleChange(event)}
               onMouseUp={(event) => this.handleTooltipVisibleChange(event)}
          >
            <div
                className={`${prefixCls}-h-line`}
                style={hasColor ? {background: this.props.color} : {}}
            ></div>
            {
              !disabled ? (<div
                  className={`${prefixCls}-h-mark`}
                  style={hasColor ? {borderColor: this.props.color} : {}}
              ></div>) : ''
            }

          </div>
        </div>
    );
  }
}