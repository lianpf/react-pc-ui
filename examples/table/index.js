import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import DemoPanel from '../template/demo-panel';
import Table from '../../src/component/table/index';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  dataIndex: '',
  key: '',
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
  }]
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

