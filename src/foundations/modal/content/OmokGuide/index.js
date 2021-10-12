import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function OmokGuide({ mode, setIsModalOpen }) {
  return (
    <S.StyledOmokGuide>
      <S.OmokBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <S.Description>
          안녕하세요! 반갑습니다. 오목 게임은 어쩌구
        </S.Description>
        <S.Button>확인</S.Button>
      </S.OmokBox>
    </S.StyledOmokGuide>
  );
}
export default OmokGuide;

OmokGuide.propTypes = {

};
