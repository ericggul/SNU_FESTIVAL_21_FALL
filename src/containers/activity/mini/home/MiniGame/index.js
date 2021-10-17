import React, { useMemo, useState, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';

// import Item from '@F/layout/GridItem';
import OmokIcon from '@I/activity/home/omok.png';
import RiddleIcon from '@I/activity/home/riddle.png';
import HandwritingIcon from '@I/activity/home/handwriting.png';
import PlaceIcon from '@I/activity/home/place.png';

import Wave from '@F/animation/Wave';

import PropTypes from 'prop-types';
import { transition } from '@C/activity/Activity';
import * as GS from '@C/activity/Activity/gridStyles';
import * as S from './styles';

function MiniGame({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const send = useCallback((location, i) => {
    setSelected(i);
    history.push(`/activity/mini/${location}`);
  }, [history]);

  const Item = (url, src, text, i) => (
    <GS.GridItem
      onClick={() => send(url, i)}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{
        opacity: selected === i ? 1 : 0,
      }}
      transition={{
        ...transition,
        delay: (i) * 0.2 + 0.1,
      }}
    >
      <GS.ImageContainer>
        <GS.IconImage
          src={src}
          duration={getRandom(0.5, 2)}
          delay={getRandom(-5, 0)}
        />
      </GS.ImageContainer>
      <GS.IconDescription shine={selected === i}>
        {text}
      </GS.IconDescription>
    </GS.GridItem>
  );

  const iconGrid = (
    <S.IconGrid isMobile={isMobile}>

      {Item('omok', OmokIcon, '오목게임', 0, selected)}
      {Item('riddle', RiddleIcon, '미궁게임', 1, selected)}
      {Item('handwriting', HandwritingIcon, '필기 맞추기', 2, selected)}
      {Item('place', PlaceIcon, '장소 맞추기', 3, selected)}
    </S.IconGrid>
  );

  return (
    <S.StyledMiniGame>
      <HeaderContent backgroundColor="transparent">미니게임</HeaderContent>
      <Wave />
      <S.StyledContainer>
        <S.Description>
          각 미니게임별 아이콘을 클릭해보세요!
        </S.Description>
        {iconGrid}
      </S.StyledContainer>
    </S.StyledMiniGame>
  );
}
export default MiniGame;

MiniGame.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
