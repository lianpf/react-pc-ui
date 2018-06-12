import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames'
import './index.less';

import leftIcon from './img/left.png';
import rightIcon from './img/right.png';

const prefixCls = 'react-pc-ui-pagination';

function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, (child) => {
    if (child && !activeKey) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  const keys = React.Children.map(props.children, child => child && child.key);
  return keys.indexOf(key) >= 0;
}


export default class Pagination extends React.Component{
  static defaultProps = {
    // current: void 0,
    defaultCurrent: 1,
    // pageSize: void 0,
    defaultPageSize: 10,
    total: 80,
    size: "",
    showQuickJumper: false,
    hideOnSinglePage: false,
    showSizeChanger: false,
    onShowSizeChange: () => {},
    onChange: () => {}
  };
  //
  // static propTypes = {
  //   activeKey: PropTypes.string,
  //   defaultActiveKey: PropTypes.string,
  //   onChange: PropTypes.func
  // };
  constructor(props) {
    super(props);
    let current = void 0;
    let pageSize = void 0;
    if ('current' in props && props.current) {
      current = props.current;
    } else {
      current = props.defaultCurrent;
    }
    if ('pageSize' in props && props.pageSize) {
      pageSize = props.pageSize;
    } else {
      pageSize = props.defaultPageSize;
    }

    this.state = {
      current,
      pageSize,
      goInputText: '',
    };

    this.changePage = this.changePage.bind(this);
    this.go = this.go.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('current' in nextProps && nextProps.current ) {
      this.setState({
        current: nextProps.current,
      });
    }
    if ('pageSize' in nextProps && nextProps.pageSize) {
      this.setState({
        pageSize: nextProps.pageSize,
      });
    }
  }
  changePage(page) {
    this.setState({
      current: page,
    }, () => {
      this.props.onChange(this.state.current, this.state.pageSize);
    })
  }
  prevPage = () => {
    if (this.hasPrev()) {
      this.changePage(this.state.current - 1);
    }
  };

  nextPage = () => {
    if (this.hasNext()) {
      this.changePage(this.state.current + 1);
    }
  };

  hasPrev = () => {
    return this.state.current > 1;
  };

  hasNext = () => {
    return this.state.current < this.calculatePage();
  };
  inputPage(value) {
    this.setState({
      goInputText: value,
    })
  }
  go = (e) => {
    let value = this.state.goInputText;
    if (value === '') {
      return;
    }
    value = isNaN(value) ? this.state.current : Number(value);
    if (e.keyCode === 13 || e.type === 'click') {
      this.setState({
        goInputText: '',
      });
      this.changePage(value);
    }
  };



  render(){
    const { total } = this.props;
    const { pageSize, current } = this.state;

    const totalPage = Math.ceil(total/pageSize);

    let pageList = [];
    for(let i = 0; i < totalPage; i++) {
      pageList.push(<li
          className={`${prefixCls}-pageList-basic
          ${prefixCls}-pageList-large
          ${current === i + 1 ? `${prefixCls}-pageList-large-active` : ''}`}
          key={`page-${i}`}
          onClick={() => this.changePage(i+1)}
      >{i + 1}</li>)
    }
    return (
        <div className={`${prefixCls}`}>
          <ul className={`${prefixCls}-pageList`}>
            <li className={`${prefixCls}-pageList-basic ${prefixCls}-pageList-large`}>
              <img src={leftIcon} alt="" onClick={this.prevPage} />
            </li>
            {pageList}
            <li className={`${prefixCls}-pageList-basic ${prefixCls}-pageList-large`}>
              <img src={rightIcon} alt="" onClick={this.nextPage} />
            </li>
          </ul>
          {/*<select className={`${prefixCls}-showPage`} name="" id="">*/}
            {/*<option value ="10">10条/页</option>*/}
            {/*<option value ="20">20条/页</option>*/}
            {/*<option value ="30">30条/页</option>*/}
            {/*<option value ="40">40条/页</option>*/}
          {/*</select>*/}
          <div className={`${prefixCls}-quicklyPage`}>
            跳至 <input
              type="text"
              value={this.state.goInputText}
              onChange={(e) => this.inputPage(e.target.value)}
              onKeyUp={this.go}
          /> 页
          </div>
          <div className={`${prefixCls}-pageTotal`}>
            总共{total}条, 共{Math.ceil(total / pageSize)}页
          </div>
        </div>
    );
  }
}