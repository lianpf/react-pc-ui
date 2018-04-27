import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

// import Button from '../../lib/button/index';
import Button from '../../src/component/button/index';
import './index.less';

const params = {
  bgColor: '#DA3D42',
  color: '#fff',
  type : 'default',
  // loading: false,
  // loadingColor: '#FFFF00',
  loadingSize: 14,
  disabled: false,
  radius: 20,
  fontSize: 16
};

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
         <Button {...params}>Default</Button>
       </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

