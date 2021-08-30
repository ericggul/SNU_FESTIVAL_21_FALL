import React, { useEffect, useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import PhoneCertImage from '@I/performance/phone-cert.png';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Guide from '@C/performance/common/Guide';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@/foundations/images/Image';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from '../common/styles';

function PhoneCert({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('phone-cert').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const title = <Title decorationOne="자작곡부터 커버곡까지!" decorationTwo="관악의 밴드 실력자들과 함께하는" title="폰서트 LIVE" />;
  const image = <S.Image><Image src={PhoneCertImage} alt="" objectFit="scale-down" /></S.Image>;
  const guide = <Guide youtubeUrl={url} date="5월 13일" times={['1부 13:30~15:30', '2부 17:30~20:10']} />;

  return (
    <S.Wrapper>
      <HeaderContent>폰서트 LIVE</HeaderContent>
      {isMobile && (
        <S.MobileBody>
          {title}
          {image}
          {guide}
        </S.MobileBody>
      )}
      {!isMobile && (
        <S.BodyWrapper>
          <S.Body>
            {image}
            <div>
              {title}
              {guide}
            </div>
          </S.Body>
        </S.BodyWrapper>
      )}
      <MascotForMission
        performance="phoneCert"
      />
    </S.Wrapper>
  );
}
export default withTheme(PhoneCert);

PhoneCert.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
