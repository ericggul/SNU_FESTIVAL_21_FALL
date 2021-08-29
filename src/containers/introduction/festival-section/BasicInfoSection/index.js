import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Header from '@I/introduction/header.png';
import Poster21Fall from '@I/poster/21Fall.png';
import TextReveal from '@F/animation/text-animation/TextRevealv2';
import * as S from './styles';

function BasicInfoSection({ isMobile }) {
  const festivalIntro = (
    <S.FestivalIntro isMobile={isMobile}>
      2021 서울대학교
      <br />
      온라인 가을 축제
    </S.FestivalIntro>
  );
  const title = useMemo(() => (
    <S.Title widths={[450, 450, 131]} heights={[240, 240, 131].map(num => num * 0.473)}>
      <S.AbsoluteImage src={Header} alt="Header" widths={[240, 240, 131]} top={0} left={1} />
    </S.Title>
  ), [isMobile]);

  const mainPoster = (
    <Fade left distance="30px" delay={200}>
      <S.PosterWrapper widths={[360, 340, 240]} heights={[360, 340, 240].map(num => num * 1.414)}>
        <S.AbsoluteImage src={Poster21Fall} alt="21spring" widths={[360, 340, 240]} top={0} left={1} />
      </S.PosterWrapper>
    </Fade>
  );
  const festivalDescription = (
    // <Fade right distance="30px" delay={1000}>
    <S.FestivalDescription>
      <TextReveal text="당신이 그리워하는, <split> 혹은 느껴보지 못한 학교." globalDelay={2000} />
      <TextReveal text="밝게 빛나는 환상을 그리는 관악의 밤." globalDelay={4800} />
      <TextReveal text="여러분들이란 빛으로 가득 채워질 서울대학교 풍산마당과" globalDelay={7000} />
      <TextReveal text="함께할 비대면 축제 ver.2 관악의밤! 기대하시라!" globalDelay={7000} />
    </S.FestivalDescription>
    // </Fade>
  );

  return (
    <>
      {isMobile && (
        <S.MobileBasicInfo>
          {festivalIntro}
          {title}
          {mainPoster}
          {festivalDescription}
        </S.MobileBasicInfo>
      )}
      {!isMobile && (
        <S.BasicInfo>
          <div>
            {mainPoster}
          </div>
          <div style={{ position: 'relative' }}>
            {festivalIntro}
            {title}
            {festivalDescription}
          </div>
        </S.BasicInfo>
      )}
    </>
  );
}
export default BasicInfoSection;

BasicInfoSection.propTypes = {
  isMobile: PropTypes.bool,
};

BasicInfoSection.defaultProps = {
  isMobile: false,
};
