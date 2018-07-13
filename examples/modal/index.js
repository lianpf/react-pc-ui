import React from 'react';
import {connect} from 'react-redux';

import '../template/index.less';
import Template from '../template/index';
import Button from '../../lib/button';
import Modal from '../../lib/modal'

const options = {
  title: 'Modal',
  desc: '对话框',
  func: 'onOk & onCancel',
  params: [],
  api: [
    {
      name: 'Modal 类型',
      dataSource: [{
        param: 'Modal',
        desc: '默认modal',
        type: '-',
        default: '-',
      }, {
        param: 'Modal.confirm',
        desc: '确认modal',
        type: '-',
        default: '-',
      }, {
        param: 'Modal.success',
        desc: '成功 modal',
        type: '-',
        default: '-',
      }, {
        param: 'Modal.info',
        desc: '提示 modal',
        type: '-',
        default: '-',
      }, {
        param: 'Modal.error',
        desc: '错误 modal',
        type: '-',
        default: '-',
      }]
    },
    {
      name: 'Modal basic 配置参数',
      dataSource: [{
        param: 'title',
        desc: '标题',
        type: 'string',
        default: '-',
      }, {
        param: 'content',
        desc: '内容',
        type: 'string | ReactNode',
        default: '-',
      }, {
        param: 'okText',
        desc: '确认按钮文字',
        type: 'string',
        default: '确认',
      }, {
        param: 'onOk',
        desc: '点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭',
        type: 'function',
        default: '-',
      }]
    },
    {
      name: 'Modal special 配置参数',
      dataSource: [{
        param: 'visible',
        desc: '对话框是否可见(默认modal特有属性)',
        type: 'boolean',
        default: '-',
      }, {
        param: 'cancelText',
        desc: '取消按钮文字(默认modal和confirm特有)',
        type: 'string',
        default: '取消',
      }, {
        param: 'onCancel',
        desc: '取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭(默认modal和confirm特有)',
        type: 'function',
        default: '-',
      }]
    }
  ]
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleConfirm: false,
    };
  }

  showModal() {
    console.log('--modal-show--');
    this.setState({visible: true})
  }

  handleOk() {
    console.log('--modal-ok--');
    this.setState({visible: false})
  }

  handleCancel() {
    console.log('--modal-cancel--');
    this.setState({visible: false})
  }

  info() {
    Modal.confirm({
      title: 'Do you Want to delete?',
      content: 'Some descriptions',
      onOk() {
        console.log('--确认操作--');
      },
      onCancel() {
        console.log('--取消操作--');
      }
    });
  }

  render() {
    let componentStr = "{Modal, Button}";
    let _field = "onClick={() => this.showModal()";
    let _braceLeft = "{";
    let _braceRight = "}";

    return (
        <div>
          <Template options={options}>
            <div style={{ padding: '8px', borderRadius: '5px'}}>
              <Button onClick={() => this.showModal()}>open modal </Button>
              <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={() => this.handleOk()}
                  onCancel={() => this.handleCancel()}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>

              &nbsp;&nbsp;
              <Button onClick={() => this.info()}>open confirm </Button>
            </div>

            {/*代码展示*/}
            <div className={'showCoding'}>
              <div><span className={'highLightBlue'}>import</span> React <span className={'highLightBlue'}>from</span>
                'react';
              </div>
              <div><span className={'highLightBlue'}>import</span> {componentStr} <span
                  className={'highLightBlue'}>from</span> 'react-pc-ui';
              </div>
              <br/>

              <div>
                <span className={'highLightBlue'}>function</span> handleOk() {_braceLeft} <br/>
                <div className={'textLeft'}>
                  console.log('--modal-ok--');
                </div>
                {_braceRight} <br/>

                <span className={'highLightBlue'}>function</span> info() {_braceLeft} <br/>
                <div className={'textLeft'}>
                  Modal.confirm({_braceLeft}
                  <div className={'textLeft'}>
                    title: 'Do you Want to delete?', <br/>
                    content: 'Some descriptions', <br/>
                    onOk() {_braceLeft} <br/>
                    <div className={'textLeft'}>
                      console.log('--确认操作--');
                    </div>
                    {_braceRight}, <br/>
                    onCancel() {_braceLeft} <br/>
                    <div className={'textLeft'}>
                      console.log('--取消操作--');
                    </div>
                    {_braceRight}
                  </div>
                  {_braceRight});
                </div>
                {_braceRight}
              </div>
              <br/>

              React.render(<br/>
              &lt;div&gt;
              <div className={'textLeft'}>
                &lt;<span className={'highLightRed'}>Button</span> {_field}&gt;
                open modal
                &lt;<span className={'highLightRed'}>Button</span> /&gt;
              </div>

              <div className={'textLeft'}>
                &lt;<span className={'highLightRed'}>Modal</span> <br />
                <div className={'textLeft'}>
                  title="Basic Modal"  <br />
                  visible={_braceLeft}this.state.visible{_braceRight}  <br />
                  onOk={_braceLeft}handleOk(){_braceRight}  <br />
                  onCancel={_braceLeft}handleOk(){_braceRight} <br />
                </div>
                /&gt;
              </div>

              <div className={'textLeft'}>
                &lt;<span className={'highLightRed'}>Button</span> onClick={_braceLeft}info(){_braceRight}&gt;
                open confirm
                &lt;<span className={'highLightRed'}>Button</span> /&gt;
              </div>

              &lt;/div&gt;, container);
            </div>
          </Template>
        </div>
    );
  }
}

// function mapStateToProps(state) {
//   const { borrowMoney } = state;
//   return { borrowMoney };
// }

export default connect()(Index);

