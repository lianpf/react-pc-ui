import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import names from 'classnames'
import './index.less';

import Step from './step';

const prefixCls = 'react-pc-ui-steps';


export default class Steps extends React.Component{
  static defaultProps = {
    current: 0,
    size: 'default',
    status: 'wait'
  };

  static propTypes = {
    current: PropTypes.number,
    size: PropTypes.string,
    status: PropTypes.string
  };
  constructor(props) {
    super(props);
    let current;
    let status;
    if ('current' in props) {
      current = props.current;
    }
    if ('status' in props) {
      status = props.status;
    }

    this.state = {
      current,
      status,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('current' in nextProps) {
      this.setState({
        current: nextProps.current,
      });
    }
    if ('status' in nextProps) {
      this.setState({
        status: nextProps.status,
      });
    }
  }


  render(){
    const props = this.props;
    const filteredChildren = React.Children.toArray(props.children).filter(c => !!c);
    let childTotal = filteredChildren.length;
    let lastIndex = childTotal -1;
    let { current, status } = this.state;
    return (
        <div className={`${prefixCls}`}>
          {
            Children.map(filteredChildren, (child, index) => {
              if (!child) {
                return null;
              }
              const childProps = {
                prefixCls,
                current: current,
                stepNumber: `${index + 1}`,
                childTotal: childTotal,
                isFirstChild:  index === 0 ,
                size: props.size,
                colorFinish: props.colorFinish || '',
                colorError: props.colorError || '',
                ...child.props,
              };
              if (index !== 0) {
                childProps.className = `${prefixCls}-calc-width`;
              }
              if (status === 'error' && index === current) {
                childProps.status = 'error';
              }
              if (!child.props.status) {
                if (index === current) {
                  childProps.status = status;
                } else if (index < current) {
                  childProps.status = 'finish';
                } else {
                  childProps.status = 'wait';
                }
              }
              return cloneElement(child, childProps);
            })
          }
        </div>
    );
  }
}
