import React from 'react';
import PropTypes from 'prop-types';
import Wave from '@F/animation/CustomPath';
import * as S from './styles';

function PathMove() {
  return (
    <S.StyledPathMove>
      <Wave />
    </S.StyledPathMove>
  );
}
export default PathMove;

PathMove.propTypes = {

};
