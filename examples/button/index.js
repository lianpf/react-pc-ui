import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import Button from '../../lib/button/index';
import './index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Style = {"background": "green"};
    // console.log('--styles--', styles);
    return (
       <div>
         <p>--展示-button-组件-0-</p>
         <div className={`layout`}>hah</div>
         <Button>1</Button>
       </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

