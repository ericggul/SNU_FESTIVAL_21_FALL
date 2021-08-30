import React from 'react';
import PropTypes from 'prop-types';
import { transition } from '@C/goods/DisplaySection';
import * as S from './styles';

function TextSection() {
  return (
    <S.StyledTextSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <S.Title>
        <S.YellowTitle>축하사</S.YellowTitle>
        <br />
        <span>공식</span>
        {' '}
        <S.PurpleTitle>굿즈</S.PurpleTitle>
      </S.Title>
      <S.Description>
        <span>
          1. 판매금은
          {' '}
          <S.PurpleText>전액 기부</S.PurpleText>
          {' '}
          됩니다.
        </span>
        <br />
        <span>
          2. 굿즈
          {' '}
          <S.PurpleText>신청</S.PurpleText>
          은
          {' '}
          <S.YellowText>구글독스</S.YellowText>
          로 가능하며,
        </span>
        <br />
        <span>
          <span style={{ visibility: 'hidden' }}>2. </span>
          굿즈
          {' '}
          <S.PurpleText>수령</S.PurpleText>
          은
          {' '}
          <S.YellowText>학교 방문</S.YellowText>
          {' '}
          또는
          {' '}
          <S.YellowText>택배 수령</S.YellowText>
          {' '}
          중 선택 가능합니다.
        </span>
      </S.Description>
    </S.StyledTextSection>
  );
}
export default TextSection;

TextSection.propTypes = {

};
