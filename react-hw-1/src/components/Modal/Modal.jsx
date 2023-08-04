import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    const { header, closeButton, text, actions, onClose } = this.props;
    return (
      <div className="popup" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {closeButton && (
            <span className="close" onClick={onClose}>
              &times;
            </span>
          )}
          <h2>{header}</h2>
          <p>{text}</p>
          <div className="actions">{actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
