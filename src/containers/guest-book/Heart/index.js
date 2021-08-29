import React, {useEffect} from 'react';
import FilledHeart from '@I/guest-book/filled-heart.svg';
import EmptyHeart from '@I/guest-book/empty-heart.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

const Animation1 = () => {
  return (
    <S.StyledHeart1>
      <S.HeartImage src={FilledHeart} delay={0} alt="like" />
    </S.StyledHeart1>
  );
}

const Animation2 = () => {
return (
    <S.StyledHeart2>
      <S.HeartImage src={EmptyHeart} delay={0} alt="like" />
      <S.HeartImage src={FilledHeart} delay={0.03} alt="like" />
      <S.HeartImage src={EmptyHeart} delay={0.06} alt="like" />
    </S.StyledHeart2>
  );
}


function Heart({heartAnimate}) {

  return (
    <>
      {heartAnimate && 
        (Math.random() < 0.5 ? <Animation1 /> : <Animation2 />)}
    </>
  );
}
export default Heart;

Heart.propTypes = {

};
