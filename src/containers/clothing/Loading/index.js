import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Loading({ loaded }) {
  return (
    <S.LoadingContainer>
      로딩중...
      <S.LoadingBar width={loaded / 9} />
      <S.LoadingMessage>하의 불러오는중</S.LoadingMessage>
    </S.LoadingContainer>
  );
}
export default Loading;

Loading.propTypes = {

};
