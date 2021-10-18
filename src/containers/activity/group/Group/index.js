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
import GroupImage from '@I/activity/group/group.jpg';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import withUser from '@U/hoc/withUser';
import TreasureGuide from '@C/activity/mini/treasure-hunt/TreasureGuide';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import { EventBehavior } from '@U/initializer/googleAnalytics';

// Mission
import Light5 from '@F/Light';
import useMission from '@U/hooks/useMission';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';
import { actions } from '@/redux/mini-game/state';

import * as S from './styles';

function Group({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const [lighted, setLighted] = useState(true);
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);

  console.log('sustain', sustainLightTemp);
  console.log('light', lighted);

  useEffect(() => {
    if (!sustainLightTemp) {
      if (lightVisible) {
        const interval = setInterval(() => {
          setLighted(light => !light);
        }, 2000);
        return () => clearInterval(interval);
      } if (!lightVisible) {
        console.log('here2');
        setLighted(false);
      }
    }
  }, [sustainLightTemp, lightVisible]);

  useEffect(() => {
    if (sustainLightTemp) {
      setLighted(true);
    } else {
      setLighted(false);
    }
  }, [sustainLightTemp]);

  /// //////////////////////////
  const mission = useMission();
  const PAGE_LIGHT_INDICATOR = 7;

  const onModalChange = useCallback(() => {
    setSustainLightTemp(false);
  }, []);

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
    } else {
      setLightVisible(true);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);

  const lightMissionClick = useCallback(() => {
    setLighted(true);
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// //////////////////////////

  // TODO: 미션 분리

  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  // 링크
  const [url, setUrl] = useState('https://docs.google.com/forms/d/e/1FAIpQLScyd8QKSfZfJ3RubLhmv0AmqrzGUpQWJYIPZeO8n-pWGmtDbg/viewform');
  const [youtubeUrl, setYoutubeUrl] = useState(null);
  // useEffect(() => {
  //   linkCollectionRef.doc('group-game').get()
  //     .then((doc) => {
  //       setUrl(doc.data().url);
  //       setYoutubeUrl(doc.data().youtubeUrl);
  //     })
  //     .catch(() => (
  //       toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  // }, []);

  const today = new Date();
  const date = today.getDate();
  const hours = today.getHours();

  useEffect(() => {
    if (date > 27) {
      linkCollectionRef.doc('group-game').get()
        .then((doc) => {
          setUrl(doc.data().url);
          setYoutubeUrl(doc.data().youtubeUrl);
        })
        .catch(() => (
          toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
    } else if (date === 26 && hours > 15) {
      linkCollectionRef.doc('group-game').get()
        .then((doc) => {
          setUrl(doc.data().url);
          setYoutubeUrl(doc.data().youtubeUrl);
        })
        .catch(() => (
          toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
    }
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
      <HeaderContent backgroundColor={lighted ? '#171d2b' : '#52cbb2'}>단체게임</HeaderContent>
      <S.Body lighted={lighted}>
        <S.Poster src={GroupImage} />
        <S.Title>모여밤, 외쳐밤, 맞춰밤!</S.Title>
        <S.Descp>
          “관악의 밤을 새로운 친구들과 맞이하는 법”
          <br />
          친구들과 함께 빙고판 미션을 수행하며 친해지고,
          <br />
          상대 팀의 마음을 읽는 최고의 독심술사가 되어라!
          <br />
          빙고판 미션과 팀 대항 게임에 참여해 우승하면 상품이 와르르!!
        </S.Descp>
        <S.Contents>
          <S.Header>공지 사항</S.Header>
          <S.Info>
            **추가 신청은
            {' '}
            <S.Bold>10월 26일(화) 15:00까지만</S.Bold>
            {' '}
            받습니다!!
            {' '}
            <br />
            개인 신청, 단체 신청 모두 가능합니다!
          </S.Info>
        </S.Contents>
        <S.Contents>
          <S.Header>일시</S.Header>
          <S.Info>
            신청: ~ 10.26(화) 15:00
            <br />
            조별 활동: 10.26(화) ~ 10.28(목)
            <br />
            줌 게임: 10.26(화), 10.28(목) 18:30~20:00

          </S.Info>
        </S.Contents>
        <S.Button lighted={lighted} onClick={goToZoom}>{url.includes('docs') ? '신청하러 가기' : '줌 링크 바로가기'}</S.Button>
      </S.Body>

      {lighted && <Light5 handleClick={lightMissionClick} />}

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
