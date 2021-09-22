import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import TextReveal from '@F/animation/text-animation/TextRevealv3';
import RandomTextShuffle from '@/foundations/animation/text-animation/random-text-shuffle/RandomTextShufflev2';
import * as S from './styles';

function Intro({ handleClick }) {
  const [transition, setTransition] = useState(false);
  const onClick = useCallback(() => {
    setTransition(true);
    setTimeout(() => {
      handleClick(0, 0);
    }, 2500);
  }, []);

  return (
    <S.StyledIntro heights={[450, 400, 300]}>
      <S.HeaderSector>
        <S.FirstText transition={transition}>야매로 보는 엠비티아이!</S.FirstText>
        <S.SecondText transition={transition}>
          {transition
            ? <TextReveal text={`${String.fromCharCode(0x591C)}비티아이 `} delayTime={{ min: 300, max: 1000 }} />
            : (
              <>
                <RandomTextShuffle initialText="야비티아이" changeText={`${String.fromCharCode(0x591C)}비티아이`} delayTime={1500} />
              </>
            )}
        </S.SecondText>
        <S.ThirdText transition={transition}>관악의 밤을 비추는 별이 되어주세요!</S.ThirdText>
      </S.HeaderSector>

      <S.ButtonSector>

        <S.ButtonText transition={transition}>나의 별은 무슨 색일까?</S.ButtonText>
        <S.Button onClick={() => onClick()} transition={transition}>START!</S.Button>
      </S.ButtonSector>

    </S.StyledIntro>
  );
}
export default Intro;

Intro.propTypes = {

};
