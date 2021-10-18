import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/competition/TextSection';
import VoteSection from '@C/activity/competition/VoteSection';
import {
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
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 6;

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
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// //////////////////////////

  // firestore 불러오기
  const [cartoonListIHaveVoted, setCartoonListIHaveVoted] = useState([]);
  const [isCartoonLoaded, setIsCartoonLoaded] = useState(false);
  const [literatureListIHaveVoted, setLiteratureListIHaveVoted] = useState([]);
  const [isLiteratureLoaded, setIsLiteratureLoaded] = useState(false);
  const [videoListIHaveVoted, setVideoListIHaveVoted] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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
        setCartoonListIHaveVoted(newListIHaveVoted);
        setIsCartoonLoaded(true);
      });
      competitionCollectionRef.doc('literature').get().then((doc) => {
        const newListIHaveVoted = [];
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(uid)) {
            newListIHaveVoted.push(Number(key));
          }
        });
        setLiteratureListIHaveVoted(newListIHaveVoted);
        setIsLiteratureLoaded(true);
      });
      competitionCollectionRef.doc('video').get().then((doc) => {
        const newListIHaveVoted = [];
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(uid)) {
            newListIHaveVoted.push(Number(key));
          }
        });
        setVideoListIHaveVoted(newListIHaveVoted);
        setIsVideoLoaded(true);
      });
    }
  }, [isAuthorized]); // NOTE: dependency 로 firestore 호출량 조절

  // current 값
  const [currentField, setCurrentField] = useState(CARTOON);
  const currentItems = useMemo(() => {
    if (currentField === CARTOON) return shuffleArray(CARTOON_LIST);
    if (currentField === LITERATURE) return shuffleArray(LITERATURE_LIST);
    return shuffleArray(VIDEO_LIST);
  }, [currentField]);
  const isCurrentLoaded = useMemo(() => {
    if (currentField === CARTOON) return isCartoonLoaded;
    if (currentField === LITERATURE) return isLiteratureLoaded;
    return isVideoLoaded;
  }, [currentField, isCartoonLoaded, isLiteratureLoaded, isVideoLoaded]);
  const currentListIHaveVoted = useMemo(() => {
    if (currentField === CARTOON) return cartoonListIHaveVoted;
    if (currentField === LITERATURE) return literatureListIHaveVoted;
    return videoListIHaveVoted;
  }, [currentField, cartoonListIHaveVoted, literatureListIHaveVoted, videoListIHaveVoted]);

  // 새로 투표했을 때
  const setHaveVotedForNewVote = useCallback((field, newLikes) => {
    if (field === CARTOON) setCartoonListIHaveVoted(newLikes);
    else if (field === LITERATURE) setLiteratureListIHaveVoted(newLikes);
    else setVideoListIHaveVoted(newLikes);
  }, []);

  // 미션
  const dispatch = useDispatch();
  const { modalComponent: missionModalComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionGuide, {
    name: '공모전',
    stamp: CompetitionStamp,
  });
  useEffect(() => {
    if (isAuthorized && mission.isLoaded && !mission.competition) {
      if (currentListIHaveVoted.length > 0) {
        dispatch(actions.setFirestoreMission(user, 'competition', true));
        setIsMissionModalOpen(true);
      }
    }
  }, [isAuthorized, mission.isLoaded, mission.competition, currentListIHaveVoted, dispatch]);

  return (
    <S.StyledCompetition>
      <HeaderContent backgroundColor="#e694a2">공모전</HeaderContent>
      <S.Body>
        <TextSection />
        <S.Tab>
          {Object.keys(FIELDS).map(fieldName => (
            <React.Fragment key={fieldName}>
              <S.TabItem
                onClick={() => setCurrentField(FIELDS[fieldName])}
                isSelected={currentField === FIELDS[fieldName]}
              >
                {fieldName}
              </S.TabItem>
            </React.Fragment>
          ))}
        </S.Tab>

        <VoteSection
          field={currentField}
          items={currentItems}
          isLoaded={isCurrentLoaded}
          listIHaveVoted={currentListIHaveVoted}
          isAuthorized={isAuthorized}
          user={user}
          onVoteForField={setHaveVotedForNewVote}
        />
      </S.Body>
      <LightLetter top={150} left={theme.windowWidth / 2} handleClick={lightMissionClick} />
      {lightModalComponent}
      {missionModalComponent}
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
