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
    disabled: true,
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

    this.state = {
      parentBasicX: 0,
      parentWidthCount: 0,
      previewState: 0,
      currentState: 0,
      previewValue: props.min,
      currentValue: props.min,
    };
  }

  componentDidMount() {
    let event = this.refs['sliderH'];
    let t = 0;
    let l = 0;
    let parentWidthCount = event.offsetWidth;

    while (event = event.offsetParent) {
      t += event.offsetTop;
      l += event.offsetLeft;
    };
    this.setState({
      parentBasicX: l,
      parentWidthCount,
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
    console.log("currentValue--", currentValue);
    this.setState({
      currentValue,
    }, () => {
      this.props.onChange(this.state.currentValue);
    })
  }

  render(){
    const { disabled } = this.props;
    return (
        <div className={`${prefixCls}`}>
          <div className={`${prefixCls}-h`}
               ref="sliderH"
               onMouseDown={(event) => this.handleTooltipVisibleChange(event)}
               onMouseUp={(event) => this.handleTooltipVisibleChange(event)}
          >
            <div
                className={`${prefixCls}-h-line`}
            ></div>
            {
              !disabled ? (<div
                  className={`${prefixCls}-h-mark`}
              ></div>) : ''
            }

          </div>
        </div>
    );
  }
}