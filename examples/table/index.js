import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import DemoPanel from '../template/demo-panel';
import Table from '../../src/component/table/index';

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

const options = {
  title: 'Table',
  desc: '表格组件',
  func: 'onClick',
  params:[{
    name: 'type',
    des: '按钮大小',
    type: 'String',
    values:[{
      name: 'default',
      value: 'default',
    }, {
      name: 'large',
      value: 'large',
    }, {
      name: 'small',
      value: 'small',
    }],
    default: 'default'
  }, {
    name: 'bgColor',
    desc: '按钮背景色',
    type: 'String',
    values:[
      {
        name: '16进制',
        value: '#1E90FF',
      }, {
        name: 'RGB',
        value: 'rgb(123,104,238)',
      }, {
        name: '颜色英文名称',
        value: 'LightCoral',
      }
    ],
    default: '#DA3D42'
  }, {
    name: 'color',
    desc: '按钮文本景色',
    type: 'String',
    values:[
      {
        name: '16进制',
        value: '#fff',
      }, {
        name: 'RGB',
        value: 'rgb(0,0,0)',
      }, {
        name: '颜色英文名称',
        value: 'black',
      }
    ],
    default: '#fff'
  }, {
    name: 'disabled',
    desc: '按钮禁用',
    type: 'Boolean',
    values:[
      {
        name: '是',
        value: true,
      },
      {
        name: '否',
        value: false,
      }
    ],
    default: 'false'
  }, {
    name: 'radius',
    desc: '按钮圆角大小',
    type: 'Number',
    values:[
      {
        name: 'number数字',
        value: '5',
      }
    ],
    default: '20'
  }, {
    name: 'fontSize',
    desc: '设置按钮字体大小',
    type: 'Number',
    values:[
      {
        name: 'number数字',
        value: '18',
      }
    ],
    default: '16'
  }],
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
          <Table dataSource={dataSource} columns={columns} />
        </Template>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

