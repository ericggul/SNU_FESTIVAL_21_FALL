import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Guide from '@C/performance/common/Guide';
import * as S from '../common/styles';

function PhoneCert({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.Wrapper>
      <HeaderContent>폰서트 LIVE</HeaderContent>
      {isMobile && (
        <S.MobileBody>
          <Title decorationOne="자작곡부터 커버곡까지!" decorationTwo="관악의 밴드 실력자들과 함께하는" title="폰서트 LIVE" />
          <S.Image src={Window} />
          <Guide youtubeUrl="https://naver.com" date="5월 13일" times={['1부 14:00~16:00', '2부 18:00~20:00']} />
        </S.MobileBody>
      )}
      {!isMobile && (
        <S.BodyWrapper>
          <S.Body>
            <S.Image src={Window} />
            <div>
              <Title decorationOne="자작곡부터 커버곡까지!" decorationTwo="관악의 밴드 실력자들과 함께하는" title="폰서트 LIVE" />
              <Guide youtubeUrl="https://naver.com" date="5월 13일" times={['1부 14:00~16:00', '2부 18:00~20:00']} />
            </div>
          </S.Body>
        </S.BodyWrapper>
      )}
    </S.Wrapper>
  );
}
export default withTheme(PhoneCert);

PhoneCert.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
