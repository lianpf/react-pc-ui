import React, { Component }from 'react';
import PropTypes from 'prop-types';
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
    fontSize: 16,
    border: 'none'
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
    const { type, disabled, bgColor, color, radius, fontSize, border } = this.props;
    return (
        <button
            className={`react-pc-ui-button react-pc-ui-button-type-${type} ${disabled ? 'react-pc-ui-button-disabled' : ''}`}
            style={
              {
                backgroundColor: bgColor,
                color: color,
                borderRadius: `${radius}px`,
                fontSize: `${fontSize}px`,
                border,
              }
            }
            onClick={this.clickFunction}
        >{this.props.children}</button>
    );
  }
}

Index.propTypes = {
  bgColor: PropTypes.string,
  color : PropTypes.string,
  type : PropTypes.string,
  onClick: PropTypes.func,
  // loading: PropTypes.bool,
  // loadingColor: PropTypes.string,
  // loadingSize: PropTypes.number,
  disabled: PropTypes.bool,
  radius: PropTypes.number,
  fontSize: PropTypes.number
};

// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

// export default connect()(Index);
export default Index;

