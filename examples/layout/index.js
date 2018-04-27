import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Button from '../button/index';
import Table from '../table/index';

import Styles from './index.less';
import RedArrow from './img/redArrow.png';
import names from 'classnames';

import { getUrl } from '../utils/index';
const menuListConfig = [
  {
    isShow: true,
    text: '组件库',
    path: '/component',
    exact: false,
    main: Button
  },
  {
    isShow: true,
    text: 'Button',
    path: '/component/button',
    exact: false,
    main: Button
  },
  {
    isShow: true,
    text: 'Table',
    path: '/table',
    exact: false,
    main: Table
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
    console.log('--haha--', location);
    const { pathname } = location;

    const activeUrl = getUrl(location.hash);
    console.log('--activeUrl--', activeUrl);

    // let activeMenu = menuListConfig.find(menu => {
    //   return menu.path === '/user' ? pathname === menu.path : activeItemUrl.indexOf(menu.path) >= 0
    // })

    return (
        <div className={`${Styles.flexParent} ${Styles.layout}`} >
          <div className={Styles.leftMenu}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {
                menuListConfig.map((item, index) => {
                  if (item.isShow) {
                    return (
                        <li key={index} className={names(Styles.menuItem2)} >
                          <Link to={item.path}>{item.text}</Link>
                          {
                            pathname.indexOf(item.path) > -1 ? (<img src={RedArrow} alt=""/>) : ''
                          }
                        </li>
                    )
                  }
                })
              }
            </ul>
          </div>
          <div className={Styles.rightContent}>
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
