import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames';

const prefixCls = 'react-pc-ui-tabs';


const TabPane = (props) => {
  return (
      <div className={`${prefixCls}-pane`}>
        {props.props.children}
      </div>
  );
};

export default TabPane;

