import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Confetti from '@F/animation/Confetti';

import Alice from '@I/activity/riddle/alice/confetti/alice.svg';
import Bottle from '@I/activity/riddle/alice/confetti/bottle.svg';
import Cake from '@I/activity/riddle/alice/confetti/cake.svg';
import Clock from '@I/activity/riddle/alice/confetti/clock.svg';
import Clover from '@I/activity/riddle/alice/confetti/clover.svg';
import Cookie from '@I/activity/riddle/alice/confetti/cookie.svg';
import Cup from '@I/activity/riddle/alice/confetti/cup.svg';
import Dish from '@I/activity/riddle/alice/confetti/dish.svg';
import Pot from '@I/activity/riddle/alice/confetti/pot.svg';
import Rabbit from '@I/activity/riddle/alice/confetti/rabbit.svg';
import SpaceAce from '@I/activity/riddle/alice/confetti/space-ace.svg';
import HeartAce from '@I/activity/riddle/alice/confetti/heart-ace.svg';

import * as S from './styles';

const svgSet = [
  { src: Alice, weight: 0.5 },
  { src: Bottle, weight: 0.8 },
  { src: Cake, weight: 10 },
];
const svgs = [...svgSet, ...svgSet, ...svgSet, ...svgSet];

function PlaceOne() {
  const [click, setClick] = useState(false);
  const history = useHistory();

  const handleClick = useCallback(() => {
    setClick(true);
  }, []);
  const sendToMain = useCallback(() => {
    history.push('/pokemongo');
  }, []);

  return (
    <S.StyledPlaceOne>
      {
        click ? <S.RegisteredStamp /> : <S.Stamp onClick={handleClick} />
      }
      {
        click
        && (
        <S.Congrats>
          <S.CongratsText>
            축하합니다!
          </S.CongratsText>
          <S.CongratsButton onClick={sendToMain}>
            지도로 돌아가기
          </S.CongratsButton>
        </S.Congrats>
        )
      }
      {
        click
        && (
          <S.ConfettiWrapper>
            <Confetti svgs={svgs} />
          </S.ConfettiWrapper>
        )
      }
    </S.StyledPlaceOne>
  );
}
export default PlaceOne;

PlaceOne.propTypes = {

};
