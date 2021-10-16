import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/group/TextSection';
import Celebration from '@I/activity/group/celebration.png';
import LiveSection from '@C/activity/group/LiveSection';
import RankingSection from '@C/activity/group/RankingSection';
import RedBalloon from '@I/activity/treasure-hunt/balloon-red.png';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
import { getPasswordFromEmail } from '@U/functions/password';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import withUser from '@U/hoc/withUser';
import TreasureGuide from '@C/activity/mini/treasure-hunt/TreasureGuide';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import { EventBehavior } from '@U/initializer/googleAnalytics';

// Mission
import {
  Light5,
} from '@F/Light';
import useMission from '@U/hooks/useMission';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';
import { actions } from '@/redux/mini-game/state';

import * as S from './styles';

function Group({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 7;

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

  // TODO: 미션 분리
  const [hideImage, setHideImage] = useState(false);
  const treasureHunt = useSelector(state => state.miniGame.treasureHunt);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => (
    treasureHunt !== null && !treasureHunt.includes(1)
  ), []);

  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const password = useMemo(() => getPasswordFromEmail(user.email, 2, 3)[0], [user]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: treasureModalComponent, setIsModalOpen: setIsTreasureModalOpen } = useModal(TreasureGuide, { password, url: '/goods' });

  const findTreasure = () => {
    if (isAuthorized) {
      dispatch(actions.pushTreasureHunt(1));
      setIsTreasureModalOpen(true);
    } else {
      setIsSignInModalOpen(true);
    }
  };

  // 링크
  const [url, setUrl] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('group-game').get()
      .then((doc) => {
        setUrl(doc.data().url);
        setYoutubeUrl(doc.data().youtubeUrl);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const goToZoom = useCallback(() => {
    if (url !== null && url.length > 0) {
      EventBehavior('Activity', `Click Youtube Link: ${url}`, `go to ${url} by activity page`);
      window.open(url, '_blank');
    } else if (url !== null && url.length === 0) {
      toast('행사 준비 중입니다😇');
    } else {
      toast('다시 클릭해주세요!');
    }
  }, [url]);

  return (
    <S.StyledGroup>
      <HeaderContent>단체게임</HeaderContent>
      <S.Body>
        <TextSection />
        <S.ImageWrapper>
          <S.Image src={Celebration} alt="물렁팥죽 축전" />
          { isPlaying && (
            <>
              {!hideImage && <S.Image src={Celebration} alt="물렁팥죽 축전" isFake onClick={() => setHideImage(true)} />}
              <S.Balloon src={RedBalloon} alt="" bottom={isMobile ? -15 : -10} left={5} duration={2} onClick={findTreasure} />
            </>
          )}
          {signInModalComponent}
          {treasureModalComponent}
        </S.ImageWrapper>
        <LiveSection url={youtubeUrl} />
        <RankingSection url={url} />
      </S.Body>
      <S.Button onClick={goToZoom}>줌 링크 바로가기</S.Button>
      <Light5 top={150} left={150} handleClick={lightMissionClick} />
      {/* {lightVisible && <Light7 top={150} left={150} handleClick={lightMissionClick} />} */}
      {lightModalComponent}
    </S.StyledGroup>
  );
}
export default withTheme(withUser(Group));

Group.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
