import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Title({ data }) {
  const today = new Date();
  const date = today.getDate();
  const hours = today.getHours();
  const minute = today.getMinutes();
  const convert = hours * 60 + minute;
  return (
    <S.StyledTitle>
      {data.map((contents, i) => {
        const start = contents[1].split('-')[0];
        const end = contents[1].split('-')[1];
        const convertedStart = parseInt(start.split(':')[0]) * 60 + parseInt(start.split(':')[1]);
        const convertedEnd = parseInt(end.split(':')[0]) * 60 + parseInt(end.split(':')[1]);

        const nowStarring = (convert > convertedStart) && (convert < convertedEnd);

        return (
          <S.Container key={i}>
            <S.Row nowStarring={nowStarring}>
              <S.Name>{contents[0]}</S.Name>
              <S.Time nowStarring={nowStarring}>{contents[1]}</S.Time>
            </S.Row>
            <S.Row nowStarring={nowStarring}>
              <S.Songs>{contents[2]}</S.Songs>
            </S.Row>
          </S.Container>
        );
      })}
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
};
