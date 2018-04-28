import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Button from '../../lib/button/index';
// import Button from '../../src/component/button/index';
import './index.less';

import Template from '../template/index';

const params = {
  bgColor: '#DA3D42',
  color: '#fff',
  type : 'default',
  // loading: false,
  // loadingColor: '#FFFF00',
  loadingSize: 14,
  disabled: false,
  radius: 20,
  fontSize: 16
};

const options = {
  title: 'Button',
  desc: '按钮组件',
  params:[{
    name: 'type',
    des: '按钮大小',
    type: 'String',
    values:[
      'default（默认）',
      'large',
      'small'
    ],
    default: 'default'
  }, {
    name: 'bgColor',
    des: '按钮背景色',
    type: 'String',
    values:[
      '16进制',
      'RGB',
      '颜色英文名称'
    ],
    default: '#DA3D42'
  }, {
    name: 'color',
    des: '按钮文本景色',
    type: 'String',
    values:[
      '16进制',
      'RGB',
      '颜色英文名称'
    ],
    default: '#fff'
  }, {
    name: 'disabled',
    des: '按钮禁用',
    type: 'Boolean',
    values:[
      'true',
      'false'
    ],
    default: 'false'
  }, {
    name: 'radius',
    des: '按钮圆角大小',
    type: 'Number',
    values:[
      'number数字'
    ],
    default: '20'
  }, {
    name: 'fontSize',
    des: '设置按钮字体大小',
    type: 'Number',
    values:[
      'number数字'
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
       <div className={`button-layout`}>
         <h1>{options.title}</h1>
         <p>{options.desc}</p>
         <h2>具体语法</h2>
         <div className={'component-demo-list'}>
           {
             options.params.length && options.params.map((item, index) => {
               return (
                   <div key={index} className={'component-demo-item'}>
                     --展示-button-组件-0-
                     <Button {...params}>Default</Button>
                   </div>
               );
             })
           }
         </div>
         <Template {...options} />
       </div>
    );
  }
}
// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

