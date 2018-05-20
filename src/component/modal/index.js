import Modal from './Modal';
import confirm from './confirm';

// export { ActionButtonProps } from './ActionButton';
// export { ModalProps, ModalFuncProps } from './Modal';
// Modal =  (props) => {
//   const config = {
//     type: 'default',
//     okCancel: true,
//     ...props,
//   };
//   return confirm(config);
// };

Modal.confirm =  (props) => {
  const config = {
    type: 'confirm',
    okCancel: true,
    ...props,
  };
  return confirm(config);
};

// Modal.info = function (props) {
//   const config = {
//     type: 'info',
//     iconType: 'info-circle',
//     okCancel: false,
//     ...props,
//   };
//   return confirm(config);
// };

// Modal.success = function (props) {
//   const config = {
//     type: 'success',
//     iconType: 'check-circle',
//     okCancel: false,
//     ...props,
//   };
//   return confirm(config);
// };

// Modal.error = function (props) {
//   const config = {
//     type: 'error',
//     iconType: 'cross-circle',
//     okCancel: false,
//     ...props,
//   };
//   return confirm(config);
// }

export default Modal;