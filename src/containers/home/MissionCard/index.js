import React, { useState, useEffect, useMemo } from 'react';
import LightRio from '@I/home/LightRio.png';
import useMission from '@U/hooks/useMission';
import { useUser } from '@U/hooks/useAuth';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/redux/mission/state';
import * as S from './styles';

function MissionCard({ setIsModalOpen }) {
  const { user, isAuthorized } = useUser();
  const mission = useMission();
  const lightArray = useSelector(state => state.mission.light);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => lightArray !== null, [lightArray]);
  console.log(isPlaying);

  // useEffect(() => {
  //   if (isAuthorized && !isPlaying) {
  //     dispatch(actions.intializeLight());
  //   }
  // }, [isAuthorized, isPlaying]);

  const TEXTS = [[
    '- 학교 곳곳으로 사라져버린 빛들을 찾아 관악의 밤을 밝혀주세요!',
    '- 찾아야 하는 빛은 총 10개! 빛을 찾아 클릭하세요.',
  ], [
    '- 현재 찾은 빛 총 n개! (10-n)개 남았어요.',
    '- 빛을 모두 찾아서 관의 밤을 빛내주세요!!',
  ]];

  return (
    <>
      <S.StyledMissionCard>
        <S.Contents>
          <S.Image src={LightRio} />
          <S.SubHeader>사라져버린 빛을 찾아</S.SubHeader>
          <S.Header>
            관악의 밤
            {' '}
            <S.PinkText>빛 찾기</S.PinkText>
            {' '}
            이벤트
          </S.Header>
          <S.Text>
            - 학교 곳곳으로 사라져버린 빛들을 찾아 관악의 밤을 밝혀주세요!
            <br />
            - 찾아야 하는 빛은 총 10개! 빛을 찾아 클릭하세요.
          </S.Text>
          <S.Button onClick={() => setIsModalOpen(false)}>확인</S.Button>
        </S.Contents>
      </S.StyledMissionCard>
    </>
  );
}
export default MissionCard;

MissionCard.propTypes = {

};
