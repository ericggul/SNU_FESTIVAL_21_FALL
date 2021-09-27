import React, { useEffect, useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import PhoneCertIcon from '@I/performance/icon/phone-cert-icon.png';
import PhoneCertImage from '@I/performance/phone-cert.png';
import { PhoneCertData } from '@C/performance/Data';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Bubble from '@C/performance/common/Bubble';
import Date from '@C/performance/common/Date';
import Guide from '@C/performance/common/Guide';
import Starring from '@C/performance/common/Starring';
import Fade from 'react-reveal/Fade';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@/foundations/images/Image';
import { linkCollectionRef } from '@U/initializer/firebase';
import { transition } from '@C/performance/Performance';
import { toast } from 'react-toastify';
import * as S from '../common/styles';

function PhoneCert({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState('https://www.youtube.com/embed/phnjI5IfelQ');
  const [speak, setSpeak] = useState(false);
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
  const title = <Title title="폰서트 LIVE" />;
  const date = <Date date={26} />;
  const youTube = <Fade left distance="30px" delay={1000}><iframe width={theme.windowWidth * 0.8} height={theme.windowWidth * 0.45} src="https://www.youtube.com/embed/phnjI5IfelQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></Fade>;
  const guide = <Guide date="5월 13일" times={['1부 13:30~15:30', '2부 17:30~20:10']} />;
  const starring = <Starring data={PhoneCertData} />;
  const image = <S.Image><Fade left distance="30px" delay={200}><Image src={PhoneCertImage} alt="" objectFit="scale-down" /></Fade></S.Image>;

  return (
    <S.Wrapper>
      <HeaderContent>폰서트 LIVE</HeaderContent>
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
