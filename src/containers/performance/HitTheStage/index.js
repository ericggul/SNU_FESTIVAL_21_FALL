import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { confettiFire, confettiSpread } from '@C/performance/common/confettiFire';
import HitTheStageIcon from '@I/performance/icon/hit-the-stage-icon.png';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import HitTheStageImage from '@I/performance/hit-the-stage.png';
import { HitTheStageData } from '@C/performance/Data';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Bubble from '@C/performance/common/Bubble';
import Date from '@C/performance/common/Date';
import Guide from '@C/performance/common/Guide';
import Starring from '@C/performance/common/Starring';
import Youtube from '@C/performance/common/Youtube';
import Fade from 'react-reveal/Fade';
import { withTheme } from 'styled-components';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';

import withUser from '@U/hoc/withUser';

import Image from '@F/images/Image';

import * as S from '../common/styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function HitTheStage({ theme, user, isAuthorized }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState('https://www.youtube.com/embed/phnjI5IfelQ');
  const [speak, setSpeak] = useState(false);
  const [confettiEnabled, setConfettiEnabled] = useState(false);

  const [confettiPos, setConfettiPos] = useState({ x: 0.5, y: 0.5 });

  const clickforConfetti = useCallback((e) => {
    setConfettiPos({ x: e.clientX / theme.windowWidth, y: e.clientY / theme.windowHeight });
    setConfettiEnabled(true);
  }, [theme]);

  useEffect(() => {
    window.addEventListener('click', clickforConfetti);
    return () => window.removeEventListener('click', clickforConfetti);
  }, []);

  useEffect(() => {
    if (confettiEnabled) {
      confettiSpread(confettiPos.x, confettiPos.y);
      setConfettiEnabled(false);
    }
  }, [confettiEnabled]);

  useEffect(() => {
    linkCollectionRef.doc('hit-the-stage').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const icon = (
    <S.Icon
      onClick={() => setSpeak(!speak)}
    >
      <Image src={HitTheStageIcon} alt="" objectFit="scale-down" />
    </S.Icon>
  );
  const bubble = <Bubble decoration="심장을 뛰게 하는 관악 최고의 댄스 무대" title="힛더스테이지" speak={speak} />;
  const title = <Title title="힛더스테이지" handleClick={() => setConfettiEnabled(true)} />;
  const date = <Date date={[5]} />;
  const youTube = url.length > 0 && <Youtube src={url} />;
  const guide = <Guide type="댄스공연 힛 더 스테이지" date="11월 5일(금)" times={['12:30 - 13:00']} />;
  const starring = <Starring data={HitTheStageData} />;
  const image = (
    <S.Image>
      <S.AbsoluteImage src={HitTheStageImage} alt="hit-the-stage" />
    </S.Image>
  );

  return (
    <S.Wrapper>
      <HeaderContent>힛더스테이지</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      {isMobile && (
        <S.MobileBody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 1,
          }}
        >
          <S.IconBubble>
            {icon}
            {bubble}
          </S.IconBubble>
          {title}
          {date}
          {youTube}
          {guide}
          {starring}
          {image}
        </S.MobileBody>
      )}
      {!isMobile && (
        <S.MobileBody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 1,
          }}
        >
          <S.DesktopWrapper>
            <S.IconBubble>
              {icon}
              {bubble}
            </S.IconBubble>
            <S.TitleDate>
              {title}
              {date}
            </S.TitleDate>

          </S.DesktopWrapper>
            {youTube}
            {guide}
            {starring}
            {image}

        </S.MobileBody>
      )}
    </S.Wrapper>
  );
}
export default withTheme(withUser(HitTheStage));

HitTheStage.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
