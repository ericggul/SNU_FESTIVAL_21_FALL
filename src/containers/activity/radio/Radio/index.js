import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import BackMobile from '@I/activity/radio/background-mobile.png';
import BackDesktop from '@I/activity/radio/background-web.png';
import DummyImage from '@I/activity/riddle/black/black-opening.png';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';

// Mission
import {
  LightSimple2,
} from '@F/Light';
import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import * as S from './styles';

export const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };
function Radio({ theme, user, isAuthorized }) {
  /// //////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const PAGE_LIGHT_INDICATOR = 5;
  const [sustainLightTemp, setSustainLightTemp] = useState(!mission.light || !mission.light[PAGE_LIGHT_INDICATOR]);

  const onModalChange = () => {
    if (lightVisible) {
      setSustainLightTemp(false);
    }
  };

  const { modalComponent: lightModalComponent, setIsModalOpen: setIsLightModalOpen } = useModal(LightMissionGuide, false, true,
    {
      pageIndicator: PAGE_LIGHT_INDICATOR,
    }, onModalChange);

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
    } else if (!sustainLightTemp) {
      setLightVisible(false);
    } else {
      setLightVisible(true);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);
  const lightMissionClick = useCallback(() => {
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);
  /// ///////////

  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledRadio>
      <HeaderContent backgroundColor="transparent">토크쇼 with 진용진</HeaderContent>
      {isMobile
        ? <S.Background src={BackMobile} alt="백야 배경" />
        : <S.Background src={BackDesktop} alt="백야 배경" />}
      <S.Contents
        initial={{ opacity: 0.4, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0.4, filter: 'blur(10px)' }}
        transition={transition}
      >
        <S.Container>
          <S.Texts>
            <p>이색 샤대생 인터뷰 // 진용진에 대해 알려드림</p>
          </S.Texts>
          <S.Paragraph>
            <iframe
              width={isMobile ? theme.windowWidth : theme.windowWidth * 0.6}
              height={isMobile ? theme.windowWidth * 0.5625 : theme.windowWidth * 0.3375}
              src="https://www.youtube.com/embed/wiSVFz7WyBk?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.Paragraph>
          <S.Date>
            <p>(10월 26일 라이브 녹화본)</p>
          </S.Date>
        </S.Container>
      </S.Contents>
      {lightVisible && <LightSimple2 top={150} left={theme.windowWidth / 2} handleClick={lightMissionClick} />}
      {lightModalComponent}
    </S.StyledRadio>
  );
}
export default withTheme(withUser(Radio));

Radio.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
