import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import names from 'classnames';

import Button from '../button';
import confirmIcon from './img/question.png';
import successIcon from './img/check.png';
import infoIcon from './img/infomation.png';
import errorIcon from './img/close-0.png';

const iconData = {
  'confirm': confirmIcon,
  'success': successIcon,
  'info': infoIcon,
  'error': errorIcon
};

const StyleBtn = {
  radius: "4px",
  bgColor: "#fff",
  "color": "rgba(0, 0, 0, 0.65)",
  border: '1px solid #e8e8e8',
};

class MyConfirm extends React.Component{
  static defaultProps = {
    title: '',
    visible: false,
    okText: '确定',
    onOk: () => {},
    onCancel: () => {},
    className: '',
    okBtnClassName: '',
  };

  // static propTypes = {
  //   title: PropTypes.string,
  //   visible: PropTypes.bool,
  //   okText: PropTypes.string,
  //   onOk: PropTypes.func,
  //   onClose: PropTypes.func,
  //   className: PropTypes.string,
  //   okBtnClassName: PropTypes.string,
  // };
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  onOk() {
    this.setState({
      visible: false,
    });
    this.props.onOk();
  }
  onCancel() {
    this.setState({
      visible: false,
    });
    this.props.onCancel();
  }

  render() {
    const { okText, cancelText} = this.props;
    return (
        <div>
          {
            this.state.visible ? (
                <div className={names('react-pc-ui-modal-overlay', this.props.className)}>
                  {/* confirm */}
                  <div className={'react-pc-ui-modal-confirm-wrapper'}>
                    <div className={'react-pc-ui-modal-confirm-content'}>
                      <div className={`react-pc-ui-modal-confirm-content-icon-bg react-pc-ui-modal-confirm-content-icon-${this.props.type}`}>
                        <img src={iconData[this.props.type]} alt=""/>
                      </div>

                      <div className={'react-pc-ui-modal-confirm-content-body'}>
                        <div className={'react-pc-ui-modal-confirm-content-title'}>
                          {this.props.title}
                        </div>
                        <div>
                          {this.props.content}
                        </div>
                      </div>
                    </div>
                    <div className={'react-pc-ui-modal-confirm-footer'}>
                      {
                        this.props.type === 'confirm' ?
                            <Button {...StyleBtn} onClick={() => this.onCancel()}>{cancelText || '取消'}</Button>
                            : ''
                      }
                      <Button onClick={() => this.onOk()}>{okText || '确定'}</Button>
                    </div>
                  </div>
                </div>
            ) : ''
          }
        </div>
    );
  }

}

export default function confirm(config) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  // function close(...args: any[]) {
  //   if (IS_REACT_16) {
  //     render({ ...config, close, visible: false, afterClose: destroy.bind(this, ...args) });
  //   } else {
  //     destroy(...args);
  //   }
  // }
  // function destroy(...args: any[]) {
  //   const unmountResult = ReactDOM.unmountComponentAtNode(div);
  //   if (unmountResult && div.parentNode) {
  //     div.parentNode.removeChild(div);
  //   }
  //   const triggerCancel = args && args.length &&
  //       args.some(param => param && param.triggerCancel);
  //   if (config.onCancel && triggerCancel) {
  //     config.onCancel(...args);
  //   }
  // }
  function render(props) {
    ReactDOM.render(<MyConfirm {...props} />, div);
  }
  render({ ...config, visible: true, close });
  console.log('---config--', config);
}