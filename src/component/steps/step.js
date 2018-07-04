import React from 'react';
import './index.less';
import names from 'classnames'

const prefixCls = 'react-pc-ui-tabs';

class Step extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const props = this.props;
    const { current, stepNumber, itemWidth, isFirstChild, text, prefixCls, className, status
    } = props;

    const classString = names(
        `${prefixCls}-item`,
        // `${prefixCls}-item-${status}`,
        className,
        // { [`${prefixCls}-item-custom`]: icon },
    );

    console.log("--step-props--", this.props);

    return (
        <div className={classString}>
          {
            !isFirstChild ? (
                <div className={`${prefixCls}-item-line`}>
                  <div className={`${prefixCls}-item-line-status ${prefixCls}-item-line-${status}`}></div>
                </div>
            ) : ''
          }
          <div className={`${prefixCls}-item-step`}>
            <div className={`${prefixCls}-item-step-content ${prefixCls}-item-step-content-${status}`}>
              {stepNumber}
            </div>
            <div className={`${prefixCls}-item-step-text ${prefixCls}-item-step-text-${status}`}>{status !== 'error' ? text : '失败'}</div>
          </div>
        </div>
    );
  }
}

export default Step;

