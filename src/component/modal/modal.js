import React, {PropTypes} from 'react';
import closeIcon from './img/close.png';
import ReactDOM from 'react-dom';
import names from 'classnames'
import {toggleClass} from "../../utils";
import './modal.less';
// import Button from '../../../lib/button';
import Button from '../button';

const StyleBtn = {
  radius: "4px",
  bgColor: "#fff",
  "color": "rgba(0, 0, 0, 0.65)",
  border: '1px solid #e8e8e8',
};

const MyModal = (props) => {
  const { title, visible, okText, cancelText} = props;
  return (
      <div>
        {
          visible ? (
              <div className={names('react-pc-ui-modal-overlay', props.className)}>
                {/* model */}
                <div className={'react-pc-ui-modal-wrapper'}>
                  <div className={'react-pc-ui-modal-title'}>
                    {title}
                    <img className={'react-pc-ui-modal-icon-close'} src={closeIcon} alt="" onClick={() => props.onCancel()} />
                  </div>
                  <div className={'react-pc-ui-modal-content'}>
                    {props.children}
                  </div>
                  <div className={'react-pc-ui-modal-footer'}>
                    <Button {...StyleBtn} onClick={() => props.onOk()}>{cancelText || '取消'}</Button>
                    <Button onClick={() => props.onCancel()}>{okText || '确定'}</Button>
                  </div>
                </div>
              </div>
          ) : ''
        }
      </div>
  );
};

export default class Modal extends React.Component{
  static defaultProps = {
    title: '',
    visible: false,
    okText: '确定',
    onOk: () => {},
    onClose: () => {},
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

    this.renderModal = this.renderModal.bind(this);
  }
  componentDidMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this.renderModal();
  }
  componentDidUpdate() {
    this.renderModal();
  }
  renderModal() {
    ReactDOM.render(MyModal(this.props), this.popup);
    toggleClass(document.documentElement, 'prevent-scrolling', this.props.visible)
  }
  componentWillUnmount(){
    //在组件卸载的时候，保证弹层也被卸载掉
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
    toggleClass(document.documentElement, 'prevent-scrolling', false)
  }

  render(){
    // console.log('--this.props--', this.props);
    return null;
  }
}