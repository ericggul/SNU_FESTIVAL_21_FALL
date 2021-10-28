import React from 'react';
import Logo from '@I/jabti/Logo.png';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router';
import TextReveal from '@F/animation/text-animation/text-reveal/TextRevealv4';
import * as S from './styles';

function DetailFestivalInfo() {
  const history = useHistory();
  return (
    <S.StyledDetailFestivalInfo onClick={() => history.push('/')}>
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
            11.2 - 11.5
          </div>
        </S.Header>
      </Fade>
      <Fade duration={1000}>
        <S.Body>
          <TextReveal text="당신이 그리워하는, 혹은 느껴보지 못한 학교." globalDelay={2000} />
          <TextReveal text="밝게 빛나는 환상을 그리는 관악의 밤." globalDelay={2500} />
          <TextReveal text="여러분들이란 빛으로 가득 채워주세요." globalDelay={3000} />
          <TextReveal text="문화관과 함께할 서울대학교 비대면 축제 ver2. 관악의밤!" globalDelay={3000} />
          <TextReveal text="기대하시라!" globalDelay={3000} />
        </S.Body>
      </Fade>
    </S.StyledDetailFestivalInfo>
  );
}
export default DetailFestivalInfo;

DetailFestivalInfo.propTypes = {

};
