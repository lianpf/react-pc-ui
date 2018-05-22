import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames'
import './index.less';

import TabPane from './TabPane';

const prefixCls = 'react-pc-ui-tabs';


function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, (child) => {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

export default class Tabs extends React.Component{
  // static defaultProps = {
  //   title: '',
  //   visible: false,
  //   okText: '确定',
  //   onOk: () => {},
  //   onClose: () => {},
  //   className: '',
  //   okBtnClassName: '',
  // };

  // static propTypes = {
  //   title: PropTypes.string,
  //   visible: PropTypes.bool,
  //   okText: PropTypes.string,
  //   onOk: PropTypes.func,
  //   onClose: PropTypes.func,
  //   className: PropTypes.string,
  //   okBtnClassName: PropTypes.string,
  // };
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
      // https://github.com/ant-design/ant-design/issues/7093
      this.setState({
        activeKey: getDefaultActiveKey(nextProps),
      });
    }
  }
  setActiveKey(activeKey) {
    this.setState({activeKey});
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
    console.log('--activeKey--', activeKey);
    if (props.children) {
      props.children.map((item) => {
        console.log('--activeKey=item.key--', item.key === activeKey);
        if (item.key === activeKey) {
          childNode = <TabPane {...item} />;
        }
      });
    }
    return childNode;
  }


  render(){
    console.log('--this.props--', this.props);
    const props = this.props;
    const { activeKey } = this.state;

    return (
        <div className={`${prefixCls}`}>
          {this.getTabsNav(props)}
          {this.renderTabPane(props)}
        </div>
    );
  }
}

Tabs.TabPane = TabPane;