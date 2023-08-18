import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({ closeButton, modalData, actions, onClose }) => {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={handleModalContentClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{modalData.header}</h3>
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


Modal.propTypes = {
  modalData: PropTypes.object,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  closeButton: true,
  modalData: {}
}

export default Modal;