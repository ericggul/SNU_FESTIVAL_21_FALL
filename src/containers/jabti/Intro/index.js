import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Intro({ handleClick }) {
  const [transit, setTransit] = useState(false);

  const onClick = useCallback(() => {
    console.log('hey');
    handleClick(0, 0);
    // setTimeout(() => handleClick(0, 0), 1000);
  }, []);

  return (
    <S.StyledIntro heights={[450, 400, 300]}>
      <S.HeaderSector>
        <S.FirstText>야매로 보는 엠비티아이!</S.FirstText>
        <S.SecondText>
          {String.fromCharCode(0x591C)}
          비티아이
        </S.SecondText>
        <S.ThirdText>관악의 밤을 비추는 별이 되어주세요!</S.ThirdText>
      </S.HeaderSector>

      <S.ButtonSector>

        <S.ButtonText>나의 별은 무슨 색일까?</S.ButtonText>
        <S.Button onClick={() => onClick()}>START!</S.Button>
      </S.ButtonSector>

    </S.StyledIntro>
  );
}
export default Intro;

Intro.propTypes = {

};
