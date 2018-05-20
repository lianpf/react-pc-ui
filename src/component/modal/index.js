import Modal from './Modal';
import confirm from './confirm';

Modal.confirm =  (props) => {
  const config = {
    type: 'confirm',
    iconType: 'info-confirm',
    okCancel: true,
    ...props,
  };
  return confirm(config);
};

Modal.info = function (props) {
  const config = {
    type: 'info',
    iconType: 'info-info',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.success = function (props) {
  const config = {
    type: 'success',
    iconType: 'icon-success',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.error = function (props) {
  const config = {
    type: 'error',
    iconType: 'icon-error',
    okCancel: false,
    ...props,
  };
  return confirm(config);
}

export default Modal;