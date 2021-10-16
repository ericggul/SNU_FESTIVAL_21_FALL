import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import { HeaderContent } from '@F/layout/Header';
import Fade from 'react-reveal/Fade';
import Item from '@F/layout/GridItem';
import Poster21Fall from '@I/performance/poster.png';
import PhoneCertIcon from '@I/performance/icon/phone-cert-icon.png';
import HitTheStageIcon from '@I/performance/icon/hit-the-stage-icon.png';
import GameTournamentIcon from '@I/performance/icon/game-tournament-icon.png';
import SingStealerIcon from '@I/performance/icon/sing-stealer-icon.png';

// Mission
import {
  LightSimple,
} from '@F/Light';
import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';
import FireworkSingle from '@F/animation/fireworks/FireworkSimple';

import * as S from './styles';

export const transition = { duration: 1.3, ease: [0.43, 0.13, 0.23, 0.96] };
const getRandom = (a, b) => Math.random() * (b - a) + a;

function Performance({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 0;

  const onModalChange = useCallback(() => {
    setSustainLightTemp(false);
  }, []);
  const { modalComponent: lightModalComponent, setIsModalOpen: setIsLightModalOpen } = useModal(LightMissionGuide, false, true, onModalChange,
    {
      pageIndicator: PAGE_LIGHT_INDICATOR,
    });
  useEffect(() => {
    // Doing Mission and not founded
    if (isAuthorized && mission.light) {
      if (!mission.light[PAGE_LIGHT_INDICATOR]) {
        setLightVisible(true);
      } else if (sustainLightTemp) {
        setLightVisible(true);
      } else {
        setLightVisible(false);
      }
    } else {
      setLightVisible(true);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);

  const lightMissionClick = useCallback(() => {
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// //////////////////////////

  const [selected, setSelected] = useState(null);
  const mainPoster = (
    <Fade left distance="30px" delay={200}>
      <S.PosterWrapper>
        {new Array(9).fill(0).map((e, i) => <S.AbsoluteImage key={i} src={Poster21Fall} alt="21Fall" hue={getRandom(-30, 30)} />)}
      </S.PosterWrapper>
    </Fade>
  );
  const history = useHistory();
  const send = useCallback((location, i) => {
    setSelected(i);
    history.push(`/performance/${location}`);
  }, [history]);

  const iconGrid = (
    <S.IconGrid>
      <Item
        url="phone-cert"
        src={PhoneCertIcon}
        text="폰서트 LIVE"
        i={0}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="hit-the-stage"
        src={HitTheStageIcon}
        text="힛더스테이지"
        i={1}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="sing-stealer"
        src={SingStealerIcon}
        text="씽스틸러"
        i={2}
        selected={selected}
        sendFunction={send}
      />
      <Item
        url="game-tournament"
        src={GameTournamentIcon}
        text="관악게임토너먼트"
        i={3}
        selected={selected}
        sendFunction={send}
      />

    </S.IconGrid>
  );

  return (
    <S.StyledPerformance>
      <HeaderContent backgroundColor="transparent">공연</HeaderContent>

      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <FireworkSingle isRunning />
      <S.StyledContainer>
        <S.Description>
          각 공연별 아이콘을 클릭해보세요!
          <p>
            Firework Code from @Caleb_Miller
          </p>
        </S.Description>

        {iconGrid}
        {mainPoster}
      </S.StyledContainer>
      <LightSimple top={theme.windowHeight * 0.9} left={theme.windowWidth * 0.5} handleClick={lightMissionClick} />
      {/* {lightVisible && <Light7 top={150} left={150} handleClick={lightMissionClick} />} */}
      {lightModalComponent}
    </S.StyledPerformance>
  );
}
export default withTheme(withUser(Performance));

Performance.propTypes = {

};
