import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>--组件库-lian-table-组件--</div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

