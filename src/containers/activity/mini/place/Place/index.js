import React from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import Map from '@C/activity/mini/place/Map';
import NeurtralRio from '@I/activity/place/NeutralRio.png';
import RightRio from '@I/activity/place/RightRio.png';
import WrongRio from '@I/activity/place/WrongRio.png';
import PropTypes from 'prop-types';
import * as S from './styles';

function Place({ theme }) {
  return (
    <S.StyledPlace>
      <HeaderContent backgroundColor={theme.palette.PLACE_HEADER}>
        서울대 장소 찾기
      </HeaderContent>
      <S.Container>
        <Map />
        <S.RioContainer>
          <S.Image src={NeurtralRio} />
        </S.RioContainer>
      </S.Container>
    </S.StyledPlace>
  );
}
export default withTheme(Place);

Place.propTypes = {

};
