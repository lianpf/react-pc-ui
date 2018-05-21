import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Button from '../button/index';
import Table from '../table/index';
import Message from '../message/index';
import Modal from '../modal/index';
import Breadcrumb from '../breadcrumb/index';

import './index.less';
import RedArrow from './img/redArrow.png';
import names from 'classnames';

import { getUrl } from '../utils/index';
const menuListConfig = [
  {
    isShow: true,
    text: '组件库',
    path: '/component',
    exact: true,
    main: () => (<div>react-pc-library</div>)
  },
  {
    isShow: true,
    text: 'Button 按钮',
    path: '/component/button',
    exact: true,
    main: () => <Button />
  },
  {
    isShow: true,
    text: 'Breadcrumb 面包屑',
    path: '/component/breadcrumb',
    exact: true,
    main: () => <Breadcrumb />
  },
  {
    isShow: true,
    text: 'Modal 对话框',
    path: '/component/modal',
    exact: true,
    main: () => <Modal />
  },
  {
    isShow: true,
    text: 'Message 全局提示',
    path: '/component/message',
    exact: true,
    main: () => <Message />
  },
  {
    isShow: true,
    text: 'Table 表格',
    path: '/component/table',
    exact: true,
    main: () => <Table />
  }
];

let routes = [];
menuListConfig.length && menuListConfig.map(({isShow, path, exact, main}) => {
  if (!isShow) {
    return
  }
  const childRouter = {
    path,
    exact,
    main,
  };
  routes.push(childRouter);
});

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location: {pathname} } = this.props;

    const activeUrl = pathname;
    // console.log('--activeUrl--', activeUrl);

    return (
        <div className={`layout`} >
          <div className={`leftMenu`}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {
                menuListConfig.map((item, index) => {
                  if (item.isShow) {
                    return (
                        <li key={index} className={names(`menuItem ${item.path === pathname ? `activeItem` : ''}`)} >
                          <Link to={item.path}>{item.text}</Link>
                        </li>
                    )
                  }
                })
              }
            </ul>
          </div>
          <div className={`rightContent`}>
            <Router>
              <Switch>
                {
                  routes.map((route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                  })
                }
              </Switch>
            </Router>
          </div>
        </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { activeItemUrl, userAccountAuth, cashAmt, award, creditsNum, showVerifyConfirm } = state.accountMenu;
//   return { activeItemUrl, userAccountAuth, cashAmt, award, creditsNum, riskTest: state.riskTest, showVerifyConfirm };
// }

export default connect()(Index);
