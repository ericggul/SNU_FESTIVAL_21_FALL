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
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 2;

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

  // TODO: 코드 중복
  const treasureHunt = useSelector(state => state.miniGame.treasureHunt);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => (
    treasureHunt !== null && !treasureHunt.includes(2)
  ), []);

  const password = useMemo(() => getPasswordFromEmail(user.email, 2, 3)[1], [user]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  return (
    <S.StyledGoods>
      <HeaderContent>굿즈</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <S.Body>
        <TextSection />
        <DisplaySection />
      </S.Body>
      {!isPlaying && (
        <ScrollTopButton />
      )}

      <Light2 top={150} left={150} handleClick={lightMissionClick} />
      {/* {lightVisible && <Light7 top={150} left={150} handleClick={lightMissionClick} />} */}
      {lightModalComponent}
      {signInModalComponent}
    </S.StyledGoods>
  );
}
export default withUser(Goods);

Goods.propTypes = {

};
