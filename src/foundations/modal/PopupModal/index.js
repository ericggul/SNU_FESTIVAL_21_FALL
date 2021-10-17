import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { rgba } from 'polished';

function PopupModal({
  isModalOpen, setIsModalOpen, children, darkBackground, closeOnDocumentClick, width,
}) {
  return (
    <Popup
      nested
      modal
      open={isModalOpen}
      closeOnDocumentClick={closeOnDocumentClick}
      onClose={() => setIsModalOpen(false)}
      overlayStyle={darkBackground ? {
        background: rgba(0, 0, 0, 0.7),
        overflow: 'auto',
      } : { background: 'transparent' }}
      contentStyle={{
        width,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
      }}
    >
      {children}
    </Popup>
  );
}
export default PopupModal;

PopupModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  closeOnDocumentClick: PropTypes.bool,
  width: PropTypes.string,
};

PopupModal.defaultProps = {
  closeOnDocumentClick: false,
  width: undefined,
};
