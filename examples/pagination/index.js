import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
// import Pagination from '../../lib/pagination';
import Pagination from '../../src/component/pagination';


const options = {
  title: 'Pagination',
  desc: '分页 采用分页的形式分隔长列表，每次只加载一个页面',
  func: '-',
  params: [],
  api: [
    {
      name: 'Pagination 配置参数',
      dataSource: [{
        param: 'current',
        desc: '当前页数',
        type: 'number',
        default: '-',
      }, {
        param: 'defaultCurrent',
        desc: '默认的当前页数',
        type: 'number',
        default: '1',
      }, {
        param: 'pageSize',
        desc: '每页条数',
        type: 'number',
        default: '-',
      }, {
        param: 'defaultPageSize',
        desc: '默认的每页条数',
        type: 'number',
        default: '10',
      }, {
        param: 'total',
        desc: '数据总数',
        type: 'number',
        default: '0',
      }, {
        param: 'size',
        desc: '当为「small」时，是小尺寸分页, 可选状态 small、large',
        type: 'string',
        default: 'large',
      }, {
        param: 'activeColor',
        desc: 'pager 为 active 状态 color, 支持16进制和rgba',
        type: 'string',
        default: '-',
      }, {
        param: 'showQuickJumper',
        desc: '是否可以快速跳转至某页',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'showTotal',
        desc: '是否显示总条数&总页数message',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'hideOnSinglePage',
        desc: '只有一页时是否隐藏分页器',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'showSizeChanger(此field暂不可用)',
        desc: '是否可以改变 pageSize',
        type: 'boolean',
        default: 'false',
      }, {
        param: 'onShowSizeChange(此field暂不可用)',
        desc: 'pageSize 变化的回调',
        type: 'Function(current, size)',
        default: 'noop',
      }, {
        param: 'onChange',
        desc: '页码改变的回调，参数是改变后的页码及每页条数',
        type: 'Function(page, pageSize)',
        default: 'noop',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(page, pageSize) {
    console.log("--example-pagination-pageChange-page--", page);
    console.log("--example-pagination-pageChange-pageSize--", pageSize);
  }

  render() {
    const self = this;
    const params = {
      total: 150,
      pageSize: 10,
      current: 1,
      showQuickJumper: true,
      hideOnSinglePage: false,
      showTotal: true,
      size: "",
      onChange: self.pageChange,
      activeColor: "#1890ff"
    };

    let componentStr = "{Pagination}";
    let _field="{...params}";
    let _braceLeft = "{";
    let _braceRight = "}";
    return (
        <div>
          <Template options={options}>
            <div style={{border: "1px solid rgba(0, 0, 0, .1)", padding: '22px 8px 12px', borderRadius: '5px'}}>
              <Pagination {...params} />
            </div>

            {/*代码展示*/}
            <div className={'showCoding'}>
              <div><span className={'highLightBlue'}>import</span> React <span className={'highLightBlue'}>from</span> 'react';</div>
              <div><span className={'highLightBlue'}>import</span> { componentStr } <span className={'highLightBlue'}>from</span> 'react-pc-ui';</div><br />

              <div>
                <span className={'highLightBlue'}>let</span> params = {_braceLeft} <br/>
                <div className={'textLeft'}>
                  return {_braceLeft}
                  <div className={'textLeft'}>
                    total: 150, <br/>
                    pageSize: 10,  <br/>
                    current: 1,  <br/>
                    showQuickJumper: true,  <br/>
                    hideOnSinglePage: false,  <br/>
                    showTotal: true,  <br/>
                    activeColor: "#1890ff"
                  </div>
                  {_braceRight};
                </div>
                {_braceRight}
              </div><br/>

              React.render(<br />
              <div className={'textLeft'}>
                &lt;<span className={'highLightRed'}>Pagination</span> {_field} /&gt;, container);
              </div>
            </div>
          </Template>
        </div>
    );
  }
}

export default connect()(Index);

