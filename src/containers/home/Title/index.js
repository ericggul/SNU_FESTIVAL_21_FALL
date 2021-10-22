import React from 'react';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function Title() {
  return (
    <HeaderContent
      backgroundColor="transparent"
      fixed
    >
      <S.Title>
        <p>서울대학교 가을축제 (11/2-5)</p>
        <p>관악의 밤</p>
      </S.Title>
    </HeaderContent>
  );
}
export default Title;

Title.propTypes = {

};
