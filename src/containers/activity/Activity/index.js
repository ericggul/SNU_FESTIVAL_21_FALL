import React, { useMemo, useState, useCallback } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';
import { withTheme } from 'styled-components';
import CompetitionIcon from '@I/activity/home/competition.png';
import MiniIcon from '@I/activity/home/mini.png';
import GroupIcon from '@I/activity/home/group.png';
import RadioIcon from '@I/activity/home/radio.png';

import PropTypes from 'prop-types';
import * as S from './styles';
import * as GS from './gridStyles';

export const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };

function Activity({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const getRandom = (a, b) => Math.random() * (b - a) + a;

  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const send = useCallback((location, i) => {
    setSelected(i);
    history.push(`/activity/${location}`);
  }, [history]);

  function Item({
    url, src, text, i, sendFunction,
  }) {
    return (
      <GS.GridItem
        onClick={() => sendFunction(url, i)}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{
          opacity: selected === i ? 1 : 0,
        }}
        transition={{
          ...transition,
          delay: (i + 1) * 0.25,
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
  }

  const iconGrid = (
    <S.IconGrid isMobile={isMobile}>
      <Item
        url="competition"
        src={CompetitionIcon}
        text="공모전"
        i={0}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="mini"
        src={MiniIcon}
        text="미니게임"
        i={1}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="group"
        src={GroupIcon}
        text="단체게임"
        i={2}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="radio"
        src={RadioIcon}
        text="토크쇼"
        i={3}
        selected={selected}
        sendFunction={send}
      />
    </S.IconGrid>
  );

  return (
    <S.StyledActivity>
      <HeaderContent backgroundColor={theme.palette.SOFTLIGHT_PURPLE}>행사</HeaderContent>
      <S.StyledContainer>
        <S.Description>
          각 행사별 아이콘을 클릭해보세요!
        </S.Description>

        {iconGrid}
      </S.StyledContainer>

    </S.StyledActivity>
  );
}
export default withTheme(Activity);

Activity.propTypes = {

};
