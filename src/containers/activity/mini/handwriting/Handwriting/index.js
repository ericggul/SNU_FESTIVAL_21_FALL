import React from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import Map from '@C/activity/mini/handwriting/Map';
import PropTypes from 'prop-types';
import * as S from './styles';

function Handwriting({ theme }) {
  return (
    <S.StyledHandwriting>
      <HeaderContent backgroundColor={theme.palette.HANDWRITING_HEADER}>서울대 필기 맞추기</HeaderContent>
      <S.Container>
        <S.Description>
          단과대 별로 필기를 찾아보세요!
        </S.Description>
        <Map />
      </S.Container>
    </S.StyledHandwriting>
  );
}
export default withTheme(Handwriting);

Handwriting.propTypes = {

};
