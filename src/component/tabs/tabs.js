import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames'
import './index.less';

import TabPane from './TabPane';

const prefixCls = 'react-pc-ui-tabs';


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


export default class Tabs extends React.Component{
  static defaultProps = {
    activeKey: void 0,
    defaultActiveKey: void 0,
    onChange: () => {}
  };

  static propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func
  };
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
    return (
        <div className={`${prefixCls}`}>
          {this.getTabsNav(props)}
          {this.renderTabPane(props)}
        </div>
    );
  }
}

Tabs.TabPane = TabPane;