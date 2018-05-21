import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'react-pc-ui-breadcrumb';

class Index extends React.Component{
  static defaultProps = {
    paths: []
  };

  static propTypes = {
    paths: PropTypes.array,
  };
  constructor(props) {
    super(props);
  }

  render(){
    const { paths } = this.props;
    return (
        <div className={`${prefixCls}`}>
          {
            paths && paths.length && paths.map((item, index) => {
              let link;
              if ('path' in item && item.path) {
                link = <a href={item.path} key={index}>{item.text}</a>;
              } else {
                link = <span key={index}>{item.text}</span>;
              }

              if ('text' in item) {
                return link;
              }
              return null;
            })
          }
        </div>
    );
  }
}

export default Index;