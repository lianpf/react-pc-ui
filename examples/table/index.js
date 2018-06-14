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
    return (
        <Template options={options}>
          <Table dataSource={dataSource} columns={columns} pagination={pagination} />
        </Template>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

