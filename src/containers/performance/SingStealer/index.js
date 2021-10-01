import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { confettiFire, confettiSpread } from '@C/performance/common/confettiFire';
import PropTypes from 'prop-types';
import SingStealerIcon from '@I/performance/icon/sing-stealer-icon.png';
import SingStealerImage from '@I/performance/sing-stealer.png';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import { SingStealerData } from '@C/performance/Data';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Bubble from '@C/performance/common/Bubble';
import Date from '@C/performance/common/Date';
import Guide from '@C/performance/common/Guide';
import Starring from '@C/performance/common/Starring';
import Fade from 'react-reveal/Fade';

import { withTheme } from 'styled-components';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@/foundations/images/Image';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from '../common/styles';

function SingStealer({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState('https://www.youtube.com/embed/phnjI5IfelQ');
  const [speak, setSpeak] = useState(false);
  const [confettiEnabled, setConfettiEnabled] = useState(false);
  const [confettiPos, setConfettiPos] = useState({ x: 0.5, y: 0.5 });

  const clickforConfetti = useCallback((e) => {
    console.log(theme.windowWidth);
    console.log(e.clientX / theme.windowWidth);
    setConfettiPos({ x: e.clientX / theme.windowWidth, y: e.clientY / theme.windowHeight });
    setConfettiEnabled(true);
  }, [theme]);

  useEffect(() => {
    window.addEventListener('click', clickforConfetti);
    return () => window.removeEventListener('click', clickforConfetti);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setConfettiEnabled(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (confettiEnabled) {
      confettiFire(confettiPos.x, confettiPos.y);
      setConfettiEnabled(false);
    }
  }, [confettiEnabled]);
  useEffect(() => {
    linkCollectionRef.doc('sing-stealer').get()
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
      <Image src={SingStealerIcon} alt="" objectFit="scale-down" />
    </S.Icon>
  );
  const bubble = <Bubble decoration="매력적인 목소리들로 채워가는~" title="씽스틸러!" speak={speak} />;
  const title = <Title title="씽스틸러" handleClick={() => setConfettiEnabled(true)} />;
  const date = <Date date={28} />;
  const youTube = (
    <S.YouTube
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 1.5,
      }}
    >
      <iframe width={theme.windowWidth * 0.8} height={theme.windowWidth * 0.45} src="https://www.youtube.com/embed/phnjI5IfelQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </S.YouTube>
  );
  const guide = <Guide date="5월 13일" times={['1부 13:30~15:30', '2부 17:30~20:10']} />;
  const starring = <Starring data={SingStealerData} />;
  const image = <S.Image><Fade left distance="30px" delay={200}><Image src={SingStealerImage} alt="" objectFit="scale-down" /></Fade></S.Image>;

  return (
    <S.Wrapper>
      <HeaderContent>씽스틸러</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      {isMobile && (
        <S.MobileBody>
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
        <S.MobileBody>
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
      <MascotForMission
        performance="singStealer"
      />
    </S.Wrapper>
  );
}
export default withTheme(SingStealer);

SingStealer.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
