import React, {
  useMemo, useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/goods/TextSection';
import DisplaySection from '@C/goods/DisplaySection';
import ScrollTopButton from '@F/layout/ScrollTopButton';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
import { getPasswordFromEmail } from '@U/functions/password';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import withUser from '@U/hoc/withUser';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import { Balloon } from '@C/activity/group/Group/styles';
import GreenBalloon from '@I/activity/treasure-hunt/balloon-green.png';

// Mission
import { Light2 } from '@F/Light';
import useMission from '@U/hooks/useMission';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';
import { actions } from '@/redux/mini-game/state';

import * as S from './styles';

function Goods({ user, isAuthorized }) {
  /// /////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const PAGE_LIGHT_INDICATOR = 2;
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
  /// ////////////////////

  return (
    <S.StyledGoods>
      <HeaderContent>굿즈</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <S.Body>
        <TextSection />
        <DisplaySection />
      </S.Body>
      <ScrollTopButton />

      {lightVisible && <Light2 top={150} left={200} handleClick={lightMissionClick} />}
      {lightModalComponent}
    </S.StyledGoods>
  );
}
export default withUser(Goods);

Goods.propTypes = {

};
