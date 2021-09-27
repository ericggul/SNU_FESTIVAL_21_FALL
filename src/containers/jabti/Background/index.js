import React from 'react';
import { withTheme } from 'styled-components';
import Stars from '@F/stars/Stars';
import Stars2 from '@F/stars/Stars2';
import CloudTop from '@I/jabti/background/cloud-top.png';
import CloudBottom from '@I/jabti/background/cloud-bottom.png';
import CloudLeft from '@I/jabti/background/cloud-left.png';
import CloudRight from '@I/jabti/background/cloud-right.png';
import LazyLoad from 'react-lazyload';

import * as S from './styles';

function Background({ theme, index, resultReady }) {
  return (
    <S.StyledBackground>
      <S.StarsContainer fadeOut={resultReady}>
        <Stars index={index} />
        <Stars2 width="100%" height="100%" color="rgb(255, 245, 180)" number="100" />
      </S.StarsContainer>
      {
        theme.windowWidth < 768
          ? (
            <LazyLoad>
              <S.ImageTop src={CloudTop} />
              <S.ImageBottom src={CloudBottom} />
            </LazyLoad>
          )
          : (
            <LazyLoad>
              <S.ImageLeft src={CloudLeft} />
              <S.ImageRight src={CloudRight} />
            </LazyLoad>
          )
      }
    </S.StyledBackground>
  );
}
export default withTheme(Background);

Background.propTypes = {

};
