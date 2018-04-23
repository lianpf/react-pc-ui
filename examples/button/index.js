import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import Button from '../../lib/button/index';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div>
         <p>--展示-button-组件-0-</p>
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

