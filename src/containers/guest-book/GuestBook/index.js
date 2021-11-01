import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import Comments from '@C/guest-book/Comment';
import WriteBox from '@C/guest-book/WriteBox';
import Heart from '@C/guest-book/Heart';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';

// Mission
import {
  Light3,
} from '@F/Light';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import * as S from './styles';

function GuestBook({ user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const PAGE_LIGHT_INDICATOR = 3;
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

  /// //////////////////////////

  const [heartAnimate, setHeartAnimate] = useState(false);
  const heartAnimateToggle = useCallback(() => {
    setHeartAnimate(true);
    setTimeout(() => {
      setHeartAnimate(false);
    }, 520);
  }, []);
  return (
    <S.StyledGuestBook>
      <HeaderContent>방명록</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <S.Body>
        <S.WriteBoxWrapper>
          <WriteBox user={user} />
        </S.WriteBoxWrapper>
        <S.CommentsWrapper>
          <Comments user={user} handleHeartClick={heartAnimateToggle} />
        </S.CommentsWrapper>
      </S.Body>
      <Heart heartAnimate={heartAnimate} />

      {lightVisible && <Light3 top={120} left={250} handleClick={lightMissionClick} />}
      {lightModalComponent}
    </S.StyledGuestBook>
  );
}
export default withUser(GuestBook);

GuestBook.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
};
