import React from 'react';
import PropTypes from 'prop-types';

import names from 'classnames'
import './index.less';

class Step extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const props = this.props;
    const { current, stepNumber, itemWidth, isFirstChild, text, prefixCls, className, status, size, colorFinish, colorError } = props;

    const classString = names(
        `${prefixCls}-item`,
        className,
    );
    let styleColor = {};
    let styleBg = {};
    if (colorFinish.length && status === 'finish') {
      styleColor = {
        color: colorFinish,
      };
      styleBg = {
        background: colorFinish,
      };
    }
    if (colorError.length && status === 'error') {
      styleColor = {
        color: colorError,
      }
      styleBg = {
        background: colorError,
      }
    }

    return (
        <div className={classString}>
          {
            !isFirstChild ? (
                <div className={`${prefixCls}-item-line ${prefixCls}-item-line-${size}`}>
                  <div
                      className={`${prefixCls}-item-line-status
                      ${prefixCls}-item-line-${status}`}
                      style={styleBg}
                  ></div>
                </div>
            ) : ''
          }
          <div className={`${prefixCls}-item-step`}>
            <div
                className={`${prefixCls}-item-step-content
                ${prefixCls}-item-step-content-${size}
                ${prefixCls}-item-step-content-${status}`}
                style={styleBg}
            >
              {status !== 'error' ? stepNumber : '!'}
            </div>
            <div
                className={`${prefixCls}-item-step-text
                ${prefixCls}-item-step-text-${size}
                ${prefixCls}-item-step-text-${status}`}
                style={styleColor}
            >{status !== 'error' ? text : '失败'}</div>
          </div>
        </div>
    );
  }
}

export default Step;

