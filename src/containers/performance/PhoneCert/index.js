import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { confettiFire, confettiSpread } from '@C/performance/common/confettiFire';
import PhoneCertIcon from '@I/performance/icon/phone-cert-icon.png';
import PhoneCertImage from '@I/performance/phone-cert.png';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import {
  parser, dummy, PhoneCertDataOne, PhoneCertDataTwo,
} from '@C/performance/Data';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Bubble from '@C/performance/common/Bubble';
import Date from '@C/performance/common/Date';
import Guide from '@C/performance/common/Guide';
import Youtube from '@C/performance/common/Youtube';
import StarringDouble from '@C/performance/common/StarringDouble';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import Image from '@F/images/Image';
import * as S from '../common/styles';

function PhoneCert({ theme }) {
  // console.log(parser(dummy));
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
      confettiFire(confettiPos.x, confettiPos.y);
      setConfettiEnabled(false);
    }
  }, [confettiPos, confettiEnabled]);

  useEffect(() => {
    linkCollectionRef.doc('phone-cert').get()
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
      <Image src={PhoneCertIcon} alt="" objectFit="scale-down" />
    </S.Icon>
  );
  const bubble = <Bubble decoration="관악의 밴드 실력자들과 함께하는" title="폰서트 LIVE" speak={speak} />;
  const title = <Title title="폰서트 LIVE" handleClick={() => setConfettiEnabled(true)} />;
  const date = <Date date={[4, 5]} />;
  const youTube = <Youtube src="https://www.youtube.com/embed/phnjI5IfelQ" />;
  const guide = <Guide date="11월 4일 - 5일 (목, 금)" times={['1부 목: 17:45~21:40', '2부 금: 18:00~20:00']} />;
  const starring = (
    <StarringDouble DATA={[PhoneCertDataOne, PhoneCertDataTwo]} />
  );
  const image = (
    <S.Image>
      {new Array(15).fill(0).map((e, i) => <S.AbsoluteImage key={i} src={PhoneCertImage} alt="hit-the-stage" hue={-30 + i * 5} />)}
    </S.Image>
  );

  return (
    <S.Wrapper>
      <HeaderContent>폰서트 LIVE</HeaderContent>
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
      {/* <MascotForMission
        performance="phoneCert"
      /> */}
    </S.Wrapper>
  );
}
export default withTheme(PhoneCert);

PhoneCert.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
