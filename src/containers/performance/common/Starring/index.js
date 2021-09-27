import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Title({ data }) {
  return (
    <S.StyledTitle>
      {data.map((contents, i) => (
        <S.Row key={i}>
          <S.Name>{contents[0]}</S.Name>
          <S.Time>{contents[1]}</S.Time>
        </S.Row>
      ))}
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
};
