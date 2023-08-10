import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

class Modal extends Component {
  modalopening = (e) => {
    e.stopPropagation();
  };

  render() {
    const { header, closeButton, actions, onClose } = this.props;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={this.modalopening}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{header}</h3>
              {closeButton ? (
                <span className="close-btn" onClick={onClose}>
                  <i className="fa-regular fa-2x fa-square-minus"></i>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="modal-footer">{actions}</div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  header: 'Are you want to add this item in your card?',
  closeButton: true,
}

export default Modal;