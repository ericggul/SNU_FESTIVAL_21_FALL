import React, { useState, useMemo, useCallback } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import { HeaderContent } from '@F/layout/Header';
import Fade from 'react-reveal/Fade';

import Poster21Fall from '@I/performance/poster.png';
import PhoneCertIcon from '@I/performance/icon/phone-cert-icon.png';
import HitTheStageIcon from '@I/performance/icon/hit-the-stage-icon.png';
import GameTournamentIcon from '@I/performance/icon/game-tournament-icon.png';
import SingStealerIcon from '@I/performance/icon/sing-stealer-icon.png';

import * as S from './styles';

export const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

function Performance({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [selected, setSelected] = useState(null);

  const mainPoster = (
    <Fade left distance="30px" delay={200}>
      <S.PosterWrapper>
        <S.AbsoluteImage src={Poster21Fall} alt="21spring" />
      </S.PosterWrapper>
    </Fade>
  );
  const history = useHistory();
  const send = useCallback((location, i) => {
    setSelected(i);
    history.push(`/performance/${location}`);
  }, [history]);

  const Item = (url, src, text, i) => (
    <S.GridItem
      onClick={() => send(url, i)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: selected === i ? 1 : 0,
      }}
      transition={{
        ...transition,
        delay: (i + 1) * 0.3,
      }}
    >
      <S.IconImage
        src={src}
      />
      <S.IconDescription>
        {text}
      </S.IconDescription>
    </S.GridItem>
  );

  const iconGrid = (
    <S.IconGrid>
      {Item('phone-cert', PhoneCertIcon, '폰서트 LIVE', 0)}
      {Item('hit-the-stage', HitTheStageIcon, '힛더스테이지', 1)}
      {Item('sing-stealer', SingStealerIcon, '씽스틸러', 2)}
      {Item('game-tournament', GameTournamentIcon, '관악게임토너먼트', 3)}
      {/* <S.GridItem>
        <S.IconImage src={PhoneCertIcon} onClick={() => send('phone-cert')} />
        <S.IconDescription>
          폰서트 LIVE
        </S.IconDescription>
      </S.GridItem>
      <S.GridItem>
        <S.IconImage src={HitTheStageIcon} onClick={() => send('hit-the-stage')} />
        <S.IconDescription>
          힛더스테이지
        </S.IconDescription>
      </S.GridItem>
      <S.GridItem>
        <S.IconImage src={GameTournamentIcon} onClick={() => send('game-tournament')} />
        <S.IconDescription>
          관악게임토너먼트
        </S.IconDescription>
      </S.GridItem>
      <S.GridItem>
        <S.IconImage src={SingStealerIcon} onClick={() => send('sing-stealer')} />
        <S.IconDescription>
          씽스틸러
        </S.IconDescription>
      </S.GridItem> */}
    </S.IconGrid>
  );

  return (
    <S.StyledPerformance>
      <HeaderContent>공연</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <S.StyledContainer>
        <S.Description>
          각 공연별 아이콘을 클릭해보세요!
        </S.Description>

        {iconGrid}
        {mainPoster}
      </S.StyledContainer>

    </S.StyledPerformance>
  );
}
export default withTheme(Performance);

Performance.propTypes = {

};
