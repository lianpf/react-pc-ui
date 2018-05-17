import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Button from '../../lib/button/index';
import '../template/index.less';

import Template from '../template/index';
import DemoPanel from '../template/demo-panel';

const options = {
  title: 'Button',
  desc: '按钮组件',
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
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('--button-onClick--');
  }

  render() {
    return (
        <Template options={options}>
          <div className={'component-demo-list'}>
            {
              options.params.length && options.params.map((item, index) => {
                return (
                    <DemoPanel item={item} key={index}>
                      {
                        item.values.length && item.values.map((demo, key) => {
                          let params = {
                            [item.name]: demo.value
                          };
                          return (
                              <div className={'show-demo-item'} key={`${index}-${key}`}>
                                <span>{demo.name}: {demo.value}</span>
                                <Button {...params} onClick={this.onClick}>{options.title}</Button>
                              </div>
                          )
                        })
                      }
                    </DemoPanel>
                );
              })
            }
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

