import React from 'react';
import { withTheme } from 'styled-components';
import Stars from '@F/stars/Stars';
import Stars2 from '@F/stars/Stars2';
import CloudTop from '@I/jabti/background/cloud-top.png';
import CloudBottom from '@I/jabti/background/cloud-bottom.png';
import CloudLeft from '@I/jabti/background/cloud-left.png';
import CloudRight from '@I/jabti/background/cloud-right.png';
import Moon from '@I/jabti/background/moon.png';
import PropTypes from 'prop-types';
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
            <>
              <S.ImageTop src={CloudTop} />
              <S.ImageBottom src={CloudBottom} />
            </>
          )
          : (
            <>
              <S.ImageLeft src={CloudLeft} />
              <S.ImageRight src={CloudRight} />
            </>
          )
      }
    </S.StyledBackground>
  );
}
export default withTheme(Background);

Background.propTypes = {

};
