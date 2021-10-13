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

  // useEffect(() => {
  //   if (isAuthorized && !isPlaying) {
  //     dispatch(actions.intializeLight());
  //   }
  // }, [isAuthorized, isPlaying]);

  return (
    <>
      <S.StyledMissionCard>
        <S.Contents>
          <S.Image src={LightRio} />
          <S.Header>
            관악의 밤
            {' '}
            <S.PinkText>빛 찾기</S.PinkText>
            {' '}
            이벤트
          </S.Header>
          <S.Text>
            - 웹사이트 곳곳을 돌아다니며 반짝거리는 빛을 찾아보세요!
            <br />
            - 찾아야 하는 빛은 총 10개! 모두 모아 미션을 완수하세요.
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
