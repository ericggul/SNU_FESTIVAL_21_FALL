import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import HitTheStageImage from '@I/performance/hit-the-stage.png';
import Guide from '@C/performance/common/Guide';
import { withTheme } from 'styled-components';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@/foundations/images/Image';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from '../common/styles';

function HitTheStage({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('hit-the-stage').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const title = <Title decoration="심장을 뛰게 하는 관악 최고의 댄스 무대" title="힛더스테이지" />;
  const image = <S.Image><Image src={HitTheStageImage} alt="" objectFit="scale-down" /></S.Image>;
  const guide = <Guide youtubeUrl={url} date="5월 11일" times={['18:00~18:40']} />;

  return (
    <S.Wrapper>
      <HeaderContent>힛더스테이지</HeaderContent>
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
        performance="hitTheStage"
      />
    </S.Wrapper>
  );
}
export default withTheme(HitTheStage);

HitTheStage.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
