import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import AnimatedInput from '@F/animation/text-animation/AnimatedInput';
import WaveFourSide from '@F/animation/WaveFourSide';
import * as S from './styles';

function FullScreen({
  children, isFullScreen, onCloseFullScreen, headerName,
}) {
  return (
    <>

      <S.StyledFullScreen
        isFullScreen={isFullScreen}
      >
        { isFullScreen && (
          <>
            <S.Top>
              <S.Description>
                어디일까요?
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
};

FullScreen.defaultProps = {
  children: <></>,
};
