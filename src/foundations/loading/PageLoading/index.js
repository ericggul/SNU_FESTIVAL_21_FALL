import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import LoadingDesktop from '@I/layout/loading-desktop.png';
import LoadingMobile from '@I/layout/loading-mobile.png';
import { withTheme } from 'styled-components';
import LoadingMascot from '@F/loading/LoadingMascot';
import LoadingRio from '@I/layout/loading-rio.png';
import ConstellationOne from '@I/layout/Constellation1.png';
import ConstellationTwo from '@I/layout/Constellation2.png';
import ConstellationThree from '@I/layout/Constellation3.png';
import ConstellationFour from '@I/layout/Constellation4.png';
import ConstellationFive from '@I/layout/Constellation5.png';

import * as S from './styles';

function PageLoading({ message, theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);

  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (500 / 375) * value;
    return result;
  }, [theme]);

  const convertY = useCallback((value) => {
    const result = (theme.windowHeight / 812) * value;
    return result;
  }, [theme]);

  const POS = [
    { x: 111, y: 239, w: 60 },
    { x: 204, y: 235, w: 60 },
    { x: 159, y: 597, w: 60 },
    { x: 92, y: 561, w: 60 },
    { x: 223, y: 556, w: 60 },
  ];

  return (
    <S.StyledPageLoading>
      <S.Background src={isMobile ? LoadingMobile : LoadingDesktop} />
      <S.Animation><LoadingMascot /></S.Animation>
      {/* <S.Message>{message}</S.Message> */}

      <S.ConstellationConatiner isMobile={isMobile}>

        <S.ConstellationImage src={ConstellationOne} left={convert(POS[0].x)} top={convertY(POS[0].y)} width={convert(POS[0].w)} delay={0} />
        <S.ConstellationImage src={ConstellationTwo} left={convert(POS[1].x)} top={convertY(POS[1].y)} width={convert(POS[1].w)} delay={0.2} />
        <S.ConstellationImage src={ConstellationThree} left={convert(POS[2].x)} top={convertY(POS[2].y)} width={convert(POS[2].w)} delay={0.6} />
        <S.ConstellationImage src={ConstellationFour} left={convert(POS[3].x)} top={convertY(POS[3].y)} width={convert(POS[3].w)} delay={0.8} />
        <S.ConstellationImage src={ConstellationFive} left={convert(POS[4].x)} top={convertY(POS[4].y)} width={convert(POS[4].w)} delay={0.4} />
      </S.ConstellationConatiner>
    </S.StyledPageLoading>
  );
}
export default withTheme(PageLoading);

PageLoading.propTypes = {
  message: PropTypes.string,
};

PageLoading.defaultProps = {
  message: '로딩 중입니다...',
};
