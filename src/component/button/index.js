import React, { Component, PropTypes }from 'react';
import {connect} from 'react-redux';
import './index.less';

class Index extends Component {
  static defaultProps = {
    bgColor: '#DA3D42',
    color: '#fff',
    type : 'default',
    loading: false,
    loadingColor: '#FFFF00',
    loadingSize: 14,
    disabled: false,
    radius: 20,
    fontSize: 16
  };
  constructor(props) {
    super(props);

    this.clickFunction = this.clickFunction.bind(this);
  }
  clickFunction() {
    if (this.props.onClick && this.props.disabled === false) {
      this.props.onClick()
    }
  }

  render() {
    const { type, disabled, bgColor, color, radius, fontSize } = this.props;
    return (
        <button
            className={`react-pc-ui-button react-pc-ui-button-type-${type} ${disabled ? 'react-pc-ui-button-disabled' : ''}`}
            style={
              {
                backgroundColor: bgColor,
                color: color,
                borderRadius: `${radius}px`,
                fontSize: `${fontSize}px`
              }
            }
            onClick={this.clickFunction}
        >{this.props.children}</button>
    );
  }
}

// Index.propTypes = {
//   bgColor: PropTypes.string,
//   color : PropTypes.string,
//   type : PropTypes.string,
//   onClick: PropTypes.func,
//   loading: PropTypes.bool,
//   loadingColor: PropTypes.string,
//   loadingSize: PropTypes.number,
//   disabled: PropTypes.bool,
//   radius: PropTypes.number,
//   fontSize: PropTypes.number
// };

// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

