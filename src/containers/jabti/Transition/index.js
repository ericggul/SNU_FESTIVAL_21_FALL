import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Transition() {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  return (
    <S.StyledTransition>
      {new Array(400).fill(0).map((e, i) => <S.ChildComponent key={i} delay={0.1} />)}
    </S.StyledTransition>
  );
}
export default Transition;

Transition.propTypes = {

};
