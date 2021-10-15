import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Comments from '@C/guest-book/Comment';
import WriteBox from '@C/guest-book/WriteBox';
import Heart from '@C/guest-book/Heart';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';

// Mission
import {
  Light1, Light2, Light3, Light4, Light5, Light6, Light7, LightLetter, LightSimple, LightSimple2,
} from '@F/Light';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import * as S from './styles';

function GuestBook({ user, isAuthorized }) {
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
      <S.Body>
        <S.WriteBoxWrapper>
          <WriteBox user={user} />
        </S.WriteBoxWrapper>
        <S.CommentsWrapper>
          <Comments user={user} handleHeartClick={heartAnimateToggle} />
        </S.CommentsWrapper>
      </S.Body>
      <Heart heartAnimate={heartAnimate} />

      <Light7 top={150} left={150} handleClick={lightMissionClick} />
      {/* {lightVisible && <Light7 top={150} left={150} handleClick={lightMissionClick} />} */}
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
