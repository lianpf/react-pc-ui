import React from 'react';

const prefixCls = 'react-pc-ui-tabs';

const TabPane = (props) => {
  return (
      <div className={`${prefixCls}-pane`}>
        {props.props.children}
      </div>
  );
};

export default TabPane;

