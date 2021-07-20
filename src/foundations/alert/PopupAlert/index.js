import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { rgba } from 'polished';
import * as S from './styles';

function PopupAlert({
  isAlertOpen, setIsAlertOpen, text, closeOnDocumentClick, width,
}) {
  useEffect(() => {
    if (isAlertOpen) {
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 2000);
    }
  }, [isAlertOpen]);
  return (
    isAlertOpen && (
      <S.Alert>
        {text}
      </S.Alert>
    )
  );
}
export default PopupAlert;

PopupAlert.propTypes = {
  isAlertOpen: PropTypes.bool.isRequired,
  setIsAlertOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  closeOnDocumentClick: PropTypes.bool,
  width: PropTypes.string,
};

PopupAlert.defaultProps = {
  closeOnDocumentClick: false,
  width: undefined,
};
