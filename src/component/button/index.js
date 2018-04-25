import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import './index.less';

class Index extends React.Component {
  // static propTypes = {
  //   bgColor : React.PropTypes.string,
  //   color : React.PropTypes.string,
  //   type : React.PropTypes.string,
  //   onClick: React.PropTypes.func,
  //   loading: React.PropTypes.bool,
  //   loadingColor: React.PropTypes.string,
  //   loadingSize: React.PropTypes.number,
  //   disabled: React.PropTypes.bool,
  //   radius: React.PropTypes.number,
  //   fontSize: React.PropTypes.number
  // }
  // static defaultProps = {
  //   bgColor: '#DA3D42',
  //   color: '#fff',
  //   type : 'default',
  //   loading: false,
  //   loadingColor: '#FFFF00',
  //   loadingSize: 14,
  //   disabled: false,
  //   radius: 20,
  //   fontSize: 16
  // }
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button className={`react-pc-ui-button`}>{this.props.children}</button>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

