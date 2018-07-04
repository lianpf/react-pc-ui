import React, {PropTypes, Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames'
import './index.less';

import Step from './step';

const prefixCls = 'react-pc-ui-steps';


function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, (child) => {
    if (child && !activeKey) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  const keys = React.Children.map(props.children, child => child && child.key);
  return keys.indexOf(key) >= 0;
}


export default class Steps extends React.Component{
  constructor(props) {
    super(props);
    let activeKey;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    this.state = {
      activeKey,
    };

    this.getTabsNav = this.getTabsNav.bind(this);
    this.renderTabPane = this.renderTabPane.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey,
      });
    } else if (!activeKeyIsValid(nextProps, this.state.activeKey)) {
      this.setState({
        activeKey: getDefaultActiveKey(nextProps),
      });
    }
  }
  setActiveKey(activeKey) {
    this.setState({
      activeKey
    }, () => {
      this.props.onChange(this.state.activeKey);
    });
  }

  getTabsNav(props) {
    const { activeKey } = this.state;
    if (props.children) {
      return (
          <ul className={`${prefixCls}-nav`}>
            {
              props.children.map((item) => {
                let className = names([
                  {'react-pc-ui-tabs-nav-item-active': activeKey === item.key}
                ]);
                return (
                    <li key={item.key} onClick={() => this.setActiveKey(item.key)} className={className}>{item.props.tab}</li>
                );
              })
            }
          </ul>
      );
    }
  }

  renderTabPane(props) {
    const { activeKey } = this.state;
    let childNode = null;
    if (props.children) {
      props.children.map((item) => {
        if (item.key === activeKey) {
          childNode = <TabPane {...item} />;
        }
      });
    }
    return childNode;
  }

  render(){
    const props = this.props;
    console.log('--steps-0--');
    console.log('React.Children:', Children);
    const filteredChildren = React.Children.toArray(props.children).filter(c => !!c);
    let childTotal = filteredChildren.length;
    let lastIndex = childTotal -1;
    return (
        <div className={`${prefixCls}`}>
          {
            Children.map(filteredChildren, (child, index) => {
              if (!child) {
                return null;
              }
              const childProps = {
                prefixCls,
                current: props.current,
                stepNumber: `${index + 1}`,
                childTotal: childTotal,
                isFirstChild:  index === 0 ,
                ...child.props,
              };
              if (index !== 0) {
                childProps.className = `${prefixCls}-calc-width`;
              }
              if (status === 'error' && index === current) {
                childProps.status = 'error';
              }
              if (!child.props.status) {
                if (index === props.current) {
                  childProps.status = props.status;
                } else if (index < props.current) {
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
