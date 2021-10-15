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
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 5;

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

  /// //////////////////////////

  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [clicked, setClicked] = useState(false);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('radio').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const goToYoutube = useCallback(() => {
    setClicked(true);
    if (url !== null && url.length > 0) {
      EventBehavior('Activity', `Click Youtube Link: ${url}`, `go to ${url} by activity page`);
      window.open(url, '_blank');
    } else if (url !== null && url.length === 0) {
      toast('행사 준비 중입니다😇');
      setTimeout(() => {
        setClicked(false);
      }, 400);
    } else {
      toast('다시 클릭해주세요!');
      setTimeout(() => {
        setClicked(false);
      }, 400);
    }
  }, [url]);

  return (
    <S.StyledRadio>
      <HeaderContent backgroundColor="transparent">토크쇼</HeaderContent>
      {isMobile
        ? <S.Background src={BackMobile} alt="백야 배경" />
        : <S.Background src={BackDesktop} alt="백야 배경" />}
      <S.Contents
        initial={{ opacity: 0.4, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0.4, filter: 'blur(10px)' }}
        transition={transition}
      >
        <S.Image src={DummyImage} />
        <S.Container>
          <S.Texts>
            <p>with.</p>
            <p>인플루언서</p>
          </S.Texts>
          <S.Paragraph>
            <p>10월 25일</p>
            <p>아래 링크 클릭</p>
            <p>안녕하세요</p>
          </S.Paragraph>
          <S.Button onClick={() => goToYoutube()} clicked={clicked}>지금 보러가기!</S.Button>
        </S.Container>
      </S.Contents>
      <LightSimple2 top={150} left={theme.windowWidth / 2} handleClick={lightMissionClick} />
      {/* {lightVisible && <Light7 top={150} left={150} handleClick={lightMissionClick} />} */}
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
