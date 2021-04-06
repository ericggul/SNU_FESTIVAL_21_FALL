import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MascotsInSpeechBubble1 from '@I/mascot/mascots-in-speech-bubble-1.svg';
import MascotsInSpeechBubble2 from '@I/mascot/mascots-in-speech-bubble-2.svg';
import Period from '@I/introduction/period.png';
import Title from '@I/introduction/title.png';
import SubTitle from '@I/introduction/sub_title.png';
import Poster21Spring from '@I/poster/21spring.png';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function FestivalSection({ isMobile }) {
  const title = useMemo(() => (
    <S.Title widths={[450, 450, 270]}>
      <Fade left distance="40px">
        <S.AbsoluteImage src={SubTitle} alt="FESWORLD" widths={[240, 240, 150]} top={1} left={1} />
      </Fade>
      <Fade right distance="40px">
        <S.AbsoluteImage src={Title} alt="FESWORLD" widths={[230, 230, 150]} top={isMobile ? 25 : 35} right={isMobile ? -10 : -20} />
      </Fade>
      <Fade bottom distance="20px">
        <S.AbsoluteImage src={Period} alt="FESWORLD" widths={[140, 140, 75]} top={isMobile ? 80 : 115} right={1} />
      </Fade>
      <Fade bottom distance="10px">
        <S.AbsoluteImage src={MascotsInSpeechBubble1} alt="FESWORLD" widths={[140, 140, 100]} top={isMobile ? 65 : 100} left={1} />
      </Fade>
      <Fade top distance="10px">
        <S.AbsoluteImage src={MascotsInSpeechBubble2} alt="FESWORLD" widths={[140, 140, 100]} top={1} right={-1} />
      </Fade>
    </S.Title>
  ), [isMobile]);

  const mainPoster = (
    <Fade left distance="30px">
      <S.Image src={Poster21Spring} alt="21spring" widths={[420, 340, 270]} />
    </Fade>
  );
  const festivalDescription = (
    <Fade right distance="30px">
      <S.FestivalDescription>
        초대장을 받고 온라인 세계로 들어와 도착한 페스월드!
        <br />
        고릴라리온과 리오와 함께 페스월드의 이곳 저곳을 돌아다녀보자!
        <br />
        페스월드에서 미션들을 수행하다보면 상품을 얻을지도 모른다고…?
        <br />
        재밌겠다! 비대면 축제는 처음이야!
      </S.FestivalDescription>
    </Fade>
  );

  return (
    <S.StyledFestivalSection>
      {isMobile && (
        <S.MobileBasicInfo>
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
          <div>
            {title}
            {festivalDescription}
          </div>
        </S.BasicInfo>
      )}
    </S.StyledFestivalSection>
  );
}
export default FestivalSection;

FestivalSection.propTypes = {
  isMobile: PropTypes.bool,
};

FestivalSection.defaultProps = {
  isMobile: false,
};