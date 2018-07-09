import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import Table from '../../lib/table';
// import Table from '../../src/component/table';

const dataSource = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
      <span>
      <a href="javascript:;">Action 一 {record.name}</a>
    </span>
  ),
}];
const pagination = {
  current: 1,
  pageSize: 10,
  showQuickJumper: true,
  showTotal: true,
};

const options = {
  title: 'Table',
  desc: '表格组件',
  func: 'onClick',
  params:[],
  api: [
    {
      name: 'table',
      dataSource: [{
        param: 'columns',
        desc: '表格列的配置描述',
        type: 'json数组(Object Array)',
        default: '-',
      }, {
        param: 'dataSource',
        desc: '数据数组',
        type: 'json数组(Object Array)',
        default: '-',
      },{
        param: 'pagination',
        desc: '分页器，参考组件 pagination 配置项，设为 false 时不展示和进行分页',
        type: 'object',
        default: 'false',
      }]
    },
    {
      name: 'Column',
      dataSource: [{
        param: 'dataIndex',
        desc: '列数据在数据项(dataSource)中对应的key',
        type: 'string',
        default: '-',
      }, {
        param: 'key',
        desc: 'React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性',
        type: 'string',
        default: '-',
      }, {
        param: 'title',
        desc: '列头显示文字',
        type: 'string|ReactNode',
        default: '-',
      }, {
        param: 'render',
        desc: '生成复杂数据的渲染函数, 参数分别为当前行的值, 当前行数据',
        type: 'Function(text, record) {}',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let componentStr = "{Table}";
    let _braceLeft = "{";
    let _braceRight = "}";
    let _coummnsNameRender = 'text => <a href="javascript:;">{text}</a>';
    let _coummnsActionRender = '(text, record) => (<span>\n' +
        '      <a href="javascript:;">Action 一 {record.name}</a>\n' +
        '    </span>)';

    return (
        <Template options={options}>
          <Table dataSource={dataSource} columns={columns} pagination={pagination} />

          {/*代码展示*/}
          <div className={'showCoding'}>
            <div><span className={'highLightBlue'}>import</span> React <span className={'highLightBlue'}>from</span> 'react';</div>
            <div><span className={'highLightBlue'}>import</span> { componentStr } <span className={'highLightBlue'}>from</span> 'react-pc-ui';</div><br />

            <div>
              {/*dataSource*/}
              <span className={'highLightBlue'}>const</span> dataSource = {_braceLeft} <br/>
              <div className={'textLeft'}>
                return [
                <div className={'textLeft'}>
                  {_braceLeft}
                  <div className={'textLeft'}>
                    key: '1', <br/>
                    name: 'John Brown', <br/>
                    age: 32, <br/>
                    address: 'New York No. 1 Lake Park'
                  </div>
                  {_braceRight},
                  {_braceLeft}
                  <div className={'textLeft'}>
                    key: '2', <br/>
                    name: 'Jim Green', <br/>
                    age: 42, <br/>
                    address: 'London No. 1 Lake Park'
                  </div>
                  {_braceRight},
                  {_braceLeft}
                  <div className={'textLeft'}>
                    key: '3', <br/>
                    name: 'Joe Black', <br/>
                    age: 32, <br/>
                    address: 'Sidney No. 1 Lake Park'
                  </div>
                  {_braceRight}
                </div>
                ];
              </div>
              {_braceRight} <br/>

              {/*columns*/}
              <span className={'highLightBlue'}>const</span> columns = {_braceLeft} <br/>
              <div className={'textLeft'}>
                return [
                <div className={'textLeft'}>
                  {_braceLeft}
                  <div className={'textLeft'}>
                    title: 'Name', <br/>
                    dataIndex: 'name', <br/>
                    key: 'name', <br/>
                    render: {_coummnsNameRender},
                  </div>
                  {_braceRight},
                  {_braceLeft}
                  <div className={'textLeft'}>
                    title: 'Age', <br/>
                    dataIndex: 'age', <br/>
                    key: 'age'
                  </div>
                  {_braceRight},
                  {_braceLeft}
                  <div className={'textLeft'}>
                    title: 'Address', <br/>
                    dataIndex: 'address', <br/>
                    key: 'address'
                  </div>
                  {_braceRight},
                  {_braceLeft}
                  <div className={'textLeft'}>
                    title: 'Action', <br/>
                    key: 'action', <br/>
                    render: {_coummnsActionRender},
                  </div>
                  {_braceRight}
                </div>
                ];
              </div>
              {_braceRight} <br/>

              {/*pagination*/}
              <span className={'highLightBlue'}>const</span> pagination = {_braceLeft} <br/>
              <div className={'textLeft'}>
                return {_braceLeft}
                <div className={'textLeft'}>
                  current: 1, <br/>
                  pageSize: 10, <br/>
                  showQuickJumper: true, <br/>
                  showTotal: true,
                </div>
                {_braceRight};
              </div>
              {_braceRight} <br/>

            </div><br/>

            React.render(<br />
            <div className={'textLeft'}>
              &lt;<span className={'highLightRed'}>Table</span>  <br />
              <div className={'textLeft'}>dataSource={_braceLeft}dataSource{_braceRight}</div>
              <div className={'textLeft'}>columns={_braceLeft}columns{_braceRight}</div>
              <div className={'textLeft'}>pagination={_braceLeft}pagination{_braceRight}</div>
              /&gt;, container);
            </div>
          </div>
        </Template>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

