import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/competition/TextSection';
import VoteSection from '@C/activity/competition/VoteSection';
import {
  LIST,
  CARTOON,
  CARTOON_LIST,
  FIELDS,
  LITERATURE,
  LITERATURE_LIST,
  VIDEO_LIST,
} from '@C/activity/competition/variables';
import { shuffleArray } from '@U/functions/array';
import PropTypes from 'prop-types';
import { competitionCollectionRef } from '@U/initializer/firebase';
import useMission from '@U/hooks/useMission';
import { useDispatch } from 'react-redux';
import useModal from '@U/hooks/useModal';
import MissionGuide from '@F/modal/content/MissionGuide';
import CompetitionStamp from '@I/icon/stamp/competition-stamp.png';

// Mission
import {
  LightLetter,
} from '@F/Light';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import { actions } from '@/redux/mission/state';
import * as S from './styles';

function Competition({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const PAGE_LIGHT_INDICATOR = 6;
  const [lightVisible, setLightVisible] = useState(false);
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

  // firestore 불러오기

  const [iHaveVoted, setIHaveVoted] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isAuthorized) {
      const { uid } = user;
      competitionCollectionRef.doc('cartoon').get().then((doc) => {
        const newListIHaveVoted = [];
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(uid)) {
            newListIHaveVoted.push(Number(key));
          }
        });
        setIHaveVoted(newListIHaveVoted);
        setIsLoaded(true);
      });
    }
  }, [isAuthorized]); // NOTE: dependency 로 firestore 호출량 조절

  // current 값
  const [currentField, setCurrentField] = useState(CARTOON);
  const currentItems = useMemo(() => shuffleArray(LIST), [currentField]);

  // 새로 투표했을 때
  const setHaveVotedForNewVote = useCallback((field, newLikes) => {
    setIHaveVoted(list => [...list, newLikes]);
  }, []);

  // 미션
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthorized && mission.isLoaded && !mission.competition) {
      if (iHaveVoted.length > 0) {
        dispatch(actions.setFirestoreMission(user, 'competition', true));
      }
    }
  }, [isAuthorized, mission.isLoaded, mission.competition, iHaveVoted, dispatch]);

  return (
    <S.StyledCompetition>
      <HeaderContent backgroundColor="#e694a2">공모전</HeaderContent>
      <S.Body>
        <TextSection />

        <VoteSection
          items={currentItems}
          isLoaded={isLoaded}
          listIHaveVoted={iHaveVoted}
          isAuthorized={isAuthorized}
          user={user}
          onVoteForField={setHaveVotedForNewVote}
        />
      </S.Body>
      {lightVisible && <LightLetter top={150} left={theme.windowWidth / 2} handleClick={lightMissionClick} />}
      {lightModalComponent}
    </S.StyledCompetition>
  );
}
export default withUser(withTheme(Competition));

Competition.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};
