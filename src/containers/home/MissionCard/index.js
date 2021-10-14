import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import LightRio from '@I/home/LightRio.png';
import useMission from '@U/hooks/useMission';
import { sumOfArray } from '@U/functions/array';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/redux/mission/state';
import * as S from './styles';

function MissionCard({ setIsModalOpen, isAuthorized }) {
  const mission = useMission();
  const lightArray = useSelector(state => state.mission.light);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => lightArray !== null, [lightArray]);
  const foundedLightNumbers = useMemo(() => (lightArray ? sumOfArray(lightArray) : 0), [lightArray]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setSignInModalComponent } = useModal(SignInGuide);
  const [playingState, setPlayingState] = useState(0);

  useEffect(() => {
    if (isAuthorized && !isPlaying) {
      setPlayingState(0);
      dispatch(actions.initializeLight());
    } else if (isPlaying && foundedLightNumbers !== 0) {
      setPlayingState(1);
    } else if (!isAuthorized) {
      setPlayingState(2);
      setTimeout(() => {
        setSignInModalComponent(true);
      }, 1100);
    }
  }, [isAuthorized, isPlaying]);

  const TEXTS = [[
    '- 사라져버린 빛들을 찾아 관악의 밤을 밝혀주세요!',
    '- 웹사이트 곳곳에 떠다니는 빛을 찾아 클릭하세요.',
    '- 찾아야 하는 빛은 총 10개!',
  ], [
    '- 이벤트 참여중!!',
    `- 현재 찾은 빛 총 ${foundedLightNumbers}개! ${10 - foundedLightNumbers}개 남았어요.`,
  ], [
    '- 관악의 밤 곳곳으로 사라져버린 빛들을 찾아주세요!',
    '- 로그인 후 이벤트 플레이 가능합니다',
  ], [
    '- 밝게 빛나는 ',
  ]];

  const BUTTON_TEXTS = ['시작하기', '더 찾기', '로그인'];

  const buttonClick = useCallback(() => {
    if (playingState === 2) {
      setSignInModalComponent(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isAuthorized, playingState]);

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
          {
            TEXTS[playingState].map((text, i) => (
              <S.Text key={i}>{text}</S.Text>
            ))
          }
          <S.Button onClick={() => buttonClick()}>{BUTTON_TEXTS[playingState]}</S.Button>
        </S.Contents>
      </S.StyledMissionCard>
      {signInModalComponent}
    </>
  );
}
export default MissionCard;

MissionCard.propTypes = {

};
