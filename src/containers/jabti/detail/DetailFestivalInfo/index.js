import React from 'react';
import Logo from '@I/jabti/Logo.png';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import TextReveal from '@F/animation/text-animation/TextRevealv4';
import * as S from './styles';

function DetailFestivalInfo() {
  return (
    <S.StyledDetailFestivalInfo>
      <Fade duration={1000}>
        <S.Logo src={Logo} />
      </Fade>
      <Fade duration={1000}>
        <S.Header>
          <div>
            2021 서울대학교 온라인 가을 축제
          </div>
          <div>
            {'<관악의 밤>'}
          </div>
          <div>
            10.26- 10.29
          </div>
        </S.Header>
      </Fade>
      <Fade duration={1000}>
        <S.Body>
          <TextReveal text="당신이 그리워하는, 혹은 느껴보지 못한 학교." globalDelay={2000} />
          <TextReveal text="밝게 빛나는 환상을 그리는 관악의 밤." globalDelay={2500} />
          <TextReveal text="여러분들이란 빛으로 가득 채워질 서울대학교 풍산마당과" globalDelay={3000} />
          <TextReveal text="함께할 비대면 축제 ver.2 관악의밤! 기대하시라!" globalDelay={3000} />
        </S.Body>
      </Fade>
    </S.StyledDetailFestivalInfo>
  );
}
export default DetailFestivalInfo;

DetailFestivalInfo.propTypes = {

};
