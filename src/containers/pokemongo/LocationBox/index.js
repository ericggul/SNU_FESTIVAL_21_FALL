import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function LocationBox({ cleared, indicator, handleClick }) {
  return (
    <S.StyledLocationBox>
      <S.Button onClick={() => handleClick(indicator)}>
        { cleared ? 'Found!' : 'Not Found!' }
      </S.Button>
    </S.StyledLocationBox>
  );
}
export default LocationBox;

LocationBox.propTypes = {

};
