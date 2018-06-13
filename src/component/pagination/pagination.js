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
    total: 100,
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
      pageBufferSize: 2, // totalPage 大于 5 + pageBufferSize*2 时, current 前后展示 page 个数
      jumpSize: 5,
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
  // update current
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
  // calculate totalPage
  calculateTotalPage = () => {
    const { total } = this.props;
    const { pageSize } = this.state;

    return Math.ceil(total/pageSize);
  };

  hasPrev = () => {
    return this.state.current > 1;
  };

  hasNext = () => {
    return this.state.current < this.calculateTotalPage();
  };
  inputPage(value) {
    this.setState({
      goInputText: value,
    })
  }
  go = (e) => {
    let value = this.state.goInputText;

    const totalPage = this.calculateTotalPage();

    if (value === '') {
      return;
    }
    value = isNaN(value) ? this.state.current : Number(value);
    if ( value < 1) {
      return;
    }
    if (value > totalPage) {
      value = totalPage;
    }
    if (e.keyCode === 13 || e.type === 'click') {
      this.setState({
        goInputText: '',
      });
      this.changePage(value);
    }
  };

  getJumpPrevPage() {
    return Math.max(1, this.state.current - this.state.jumpSize);
  }

  getJumpNextPage() {
    return Math.min(this.calculateTotalPage(), this.state.current + this.state.jumpSize);
  }

  jumpPrev = () => {
    this.changePage(this.getJumpPrevPage());
  }

  jumpNext = () => {
    this.changePage(this.getJumpNextPage());
  }



  render(){
    const { total } = this.props;
    const { pageSize, current, pageBufferSize } = this.state;
    const totalPage = this.calculateTotalPage();

    let jumpPrev = null;
    let jumpNext = null;
    let lastPager = null;
    let firstPager = null;
    let pageList = [];
    if ( totalPage <= 5 + pageBufferSize * 2) {
      for(let i = 0; i < totalPage; i++) {
        pageList.push(<li
            className={`${prefixCls}-pageList-basic
          ${prefixCls}-pageList-large
          ${current === i + 1 ? `${prefixCls}-pageList-large-active` : ''}`}
            key={`page-${i}`}
            onClick={() => this.changePage(i+1)}
        >{i + 1}</li>)
      }
    } else {
      jumpPrev = (
          <li
              key="prev"
              onClick={this.jumpPrev}
              tabIndex="0"
              // onKeyPress={this.runIfEnterJumpPrev}
              className={`${prefixCls}-jump-prev`}
          >...</li>
      );
      jumpNext = (
          <li
              key="next"
              tabIndex="0"
              onClick={this.jumpNext}
              // onKeyPress={this.runIfEnterJumpNext}
              className={`${prefixCls}-jump-next`}
          >...</li>
      );
      lastPager = (
          <li
              className={`${prefixCls}-pageList-basic
              ${prefixCls}-pageList-large
              ${current === totalPage ? `${prefixCls}-pageList-large-active` : ''}`}
              key={`page-${totalPage}`}
              onClick={() => this.changePage(totalPage)}
          >{totalPage}</li>
      );
      firstPager = (
          <li
              className={`${prefixCls}-pageList-basic
              ${prefixCls}-pageList-large
              ${current === 1 ? `${prefixCls}-pageList-large-active` : ''}`}
              key={`page-${1}`}
              onClick={() => this.changePage(1)}
          >{1}</li>
      );

      let left = Math.max(1, current - pageBufferSize);
      let right = Math.min(current + pageBufferSize, totalPage);
      if (current - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (totalPage - current <= pageBufferSize) {
        left = totalPage - pageBufferSize * 2;
      }

      for(let i = left; i <= right; i++) {
        pageList.push(<li
            className={`${prefixCls}-pageList-basic
          ${prefixCls}-pageList-large
          ${current === i ? `${prefixCls}-pageList-large-active` : ''}`}
            key={`page-${i}`}
            onClick={() => this.changePage(i)}
        >{i}</li>)
      }

      if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
        // pageList[0] = React.cloneElement(pagerList[0], {
        //   className: `${prefixCls}-item-after-jump-prev`,
        // });
        pageList[0] = jumpPrev;
        // pageList.unshift(jumpPrev);
      }
      if (totalPage - current >= pageBufferSize * 2 && current !== totalPage - 2) {
        // pageList[pageList.length - 1] = React.cloneElement(pageList[pageList.length - 1], {
        //   className: `${prefixCls}-item-before-jump-next`,
        // });
        pageList[pageList.length - 1] = jumpNext;
        // pageList.push(jumpNext);
      }

      if (left !== 1) {
        pageList.unshift(firstPager);
      }
      if (right !== totalPage) {
        pageList.push(lastPager);
      }
    }

    return (
        <div className={`${prefixCls}`}>
          <ul className={`${prefixCls}-pageList`}>
            <li
                className={`${prefixCls}-pageList-basic
                ${prefixCls}-pageList-large
                ${current === 1 ? `${prefixCls}-pageList-disabled`: ''}
                `}
            >
              <img src={leftIcon} alt="" onClick={this.prevPage} />
            </li>
            {pageList}
            <li
                className={`${prefixCls}-pageList-basic
                ${prefixCls}-pageList-large
                ${current === totalPage ? `${prefixCls}-pageList-disabled`: ''}
                `}
            >
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