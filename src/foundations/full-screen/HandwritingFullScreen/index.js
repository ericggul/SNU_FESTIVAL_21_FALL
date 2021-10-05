import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import * as S from './styles';

function FullScreen({
  children, isFullScreen, onCloseFullScreen, backgroundColor, headerName,
}) {
  return (
    <>
      <S.StyledFullScreen
        isFullScreen={isFullScreen}
        backgroundColor={backgroundColor}
      >
        { isFullScreen && (
          <>
            <S.Top>
              <S.Description>
                {headerName}
              </S.Description>
              <S.CloseButton onClick={onCloseFullScreen}>
                <S.CloseIcon />
              </S.CloseButton>
            </S.Top>
            {children}
          </>
        )}
      </S.StyledFullScreen>
    </>
  );
}
export default FullScreen;

FullScreen.propTypes = {
  children: PropTypes.element,
  isFullScreen: PropTypes.bool.isRequired,
  onCloseFullScreen: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
};

FullScreen.defaultProps = {
  children: <></>,
  backgroundColor: 'lightblue',
};
