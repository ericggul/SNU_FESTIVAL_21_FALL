import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import GreetingText from '@I/introduction/greeting-text.png';
import GreetingTextSmall from '@I/introduction/greeting-text-small.png';
import StaffText from '@I/introduction/staff-text.png';
import StaffTextSmall from '@I/introduction/staff-text-small.png';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function Greeting({ isMobile }) {
  return (
    <S.StyledGreeting>
      <S.TopText>
        <p>축하사란?</p>
        <div />
      </S.TopText>
      <S.ContentText>
        안녕하세요
      </S.ContentText>
      <S.ContentText>
        <S.PurpleText>
          축하사
        </S.PurpleText>
        입니다.
      </S.ContentText>
    </S.StyledGreeting>
  );
}
export default Greeting;

Greeting.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
