import React, {
  useMemo, useState, useEffect, useCallback,
} from 'react';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';
import { withTheme } from 'styled-components';
import CompetitionIcon from '@I/activity/home/competition.png';
import MiniIcon from '@I/activity/home/mini.png';
import GroupIcon from '@I/activity/home/group.png';
import RadioIcon from '@I/activity/home/radio.png';

import { LargeStarQuatro } from '@F/stars/StarComponents';
import ConstellationOne from '@I/activity/home/constellation1.png';
import ConstellationTwo from '@I/activity/home/constellation2.png';
import ConstellationThree from '@I/activity/home/constellation3.png';
import ConstellationFour from '@I/activity/home/constellation4.png';
import ConstellationFive from '@I/activity/home/constellation5.png';

// Mission
import {
  Light1,
} from '@F/Light';
import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';
import PropTypes from 'prop-types';

import * as S from './styles';
import * as GS from './gridStyles';

export const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };

function Activity({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 1;

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
      setLightVisible(false);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);

  const lightMissionClick = useCallback(() => {
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// ////////////////////
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const getRandom = (a, b) => Math.random() * (b - a) + a;

  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const send = (location, i) => {
    history.push(`/activity/${location}`);
    setSelected(i);
  };

  const convert = useCallback((value) => {
    const result = isMobile ? (theme.windowWidth / 375) * value : (500 / 375) * value;
    return result;
  }, []);

  const convertY = useCallback((value) => {
    const result = (theme.windowHeight / 812) * value;
    return result;
  }, []);

  const POS = [
    { x: 67, y: 81, w: 107 },
    { x: 160, y: 77, w: 130 },
    { x: 132, y: 665, w: 106 },
    { x: 65, y: 629, w: 111 },
    { x: 196, y: 624, w: 107 },
  ];

  const Constellation = (
    <S.ConstellationConatiner isMobile={isMobile}>
      <S.ConstellationImage src={ConstellationOne} left={convert(POS[0].x)} top={convertY(POS[0].y)} width={convert(POS[0].w)} delay={0} />
      <S.ConstellationImage src={ConstellationTwo} left={convert(POS[1].x)} top={convertY(POS[1].y)} width={convert(POS[1].w)} delay={0.2} />
      <S.ConstellationImage src={ConstellationThree} left={convert(POS[2].x)} top={convertY(POS[2].y)} width={convert(POS[2].w)} delay={0.6} />
      <S.ConstellationImage src={ConstellationFour} left={convert(POS[3].x)} top={convertY(POS[3].y)} width={convert(POS[3].w)} delay={0.8} />
      <S.ConstellationImage src={ConstellationFive} left={convert(POS[4].x)} top={convertY(POS[4].y)} width={convert(POS[4].w)} delay={0.4} />
    </S.ConstellationConatiner>
  );

  const width = isMobile ? Math.min(theme.windowWidth * 0.46, theme.windowHeight * 0.4) : Math.min(theme.windowWidth * 0.23, 350);
  const DELAY_ARRAY = isMobile ? [0, 1.5, 4.5, 3] : [0, 1.5, 3, 4.5];
  const Item = (url, src, text, i) => (
    <GS.GridItem
      fromActivity
      isMobile={isMobile}
      onClick={() => send(url, i)}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{
        opacity: selected === i ? 1 : 0,
      }}
      transition={{
        ...transition,
        delay: i * 0.2 + 0.1,
      }}
      delay={DELAY_ARRAY[i]}
    >
      <GS.ImageContainer>
        <GS.IconImage
          src={src}
          duration={getRandom(2, 5)}
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
      {Item('competition', CompetitionIcon, '공모전', 0, selected)}
      {Item('radio', RadioIcon, '토크쇼', 1, selected)}
      {Item('mini', MiniIcon, '미니게임', 2, selected)}
      {Item('group', GroupIcon, '단체게임', 3, selected)}
    </S.IconGrid>
  );

  return (
    <S.StyledActivity>
      <HeaderContent backgroundColor="transparent">행사</HeaderContent>
      <S.StyledContainer>
        {/* <S.Description>
          각 행사별 아이콘을 클릭해보세요!
        </S.Description> */}

        {iconGrid}
        <Light1 top={theme.windowHeight - 10} left={-40} handleClick={lightMissionClick} />
      </S.StyledContainer>
      {Constellation}
      {lightModalComponent}
    </S.StyledActivity>
  );
}
export default withTheme(withUser(Activity));

Activity.propTypes = {

};
