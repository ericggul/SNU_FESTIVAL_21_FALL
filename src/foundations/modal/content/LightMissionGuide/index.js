import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import withUser from '@U/hoc/withUser';
import LightRio from '@I/home/LightRio.png';
import useMission from '@U/hooks/useMission';
import { useHistory } from 'react-router';
import { sumOfArray } from '@U/functions/array';
import Close from '@I/icon/close.svg';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/redux/mission/state';
import * as S from './styles';

function LightGuide({
  setIsModalOpen, user, isAuthorized, pageIndicator,
}) {
  const mission = useMission();
  const lightArray = useSelector(state => state.mission.light);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => lightArray !== null, [lightArray]);
  const foundedLightNumbers = useMemo(() => (lightArray ? sumOfArray(lightArray) : 0), [lightArray]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const [foundState, setFoundState] = useState(pageIndicator);

  useEffect(() => {
    if (isAuthorized && mission.light && mission.light[pageIndicator] === 0) {
      const currentLight = mission.light;
      let newArray = [...currentLight];
      newArray[pageIndicator] = 1;
      dispatch(actions.setFirestoreLight(user, newArray));
    } else if (!isAuthorized) {
      setFoundState(15);
    } else if (isAuthorized && !mission.light) {
      setFoundState(11);
    }
  }, [isAuthorized, isPlaying, mission]);

  // const TEXT_SETS = [
  //   ''
  // ]

  console.log(foundState);

  const HEADERS = [
    '시작이 반이다.', // 9
    '이정도야 쉽지', // 8
    'EZPZ', // 7
    '잘찾네!!', // 6
    '진짜 반쯤 왔어', // 5
    '요기있지롱', // 4
    '세개만 더 찾자', // 3
    '힘드니까 인생이다', // 2
    '조금만 더!!', // 1
    '축하합니다!', // 0
  ];

  const LOGIN_TEXTS = [
    '- 관악의 밤 곳곳의 숨은 빛을 찾고, 꺼진 불을 밝혀보세요!',
    '- 로그인 후에 이벤트를 참가하세요.',
  ];

  const START_EVENT_TEXTS = [
    '- 빛 찾기 이벤트를 시작하고 싶으세요?',
    '- 메인 화면에서 잠자고 있는 리오를 깨워보세요!',
  ];

  const REDUNDANT_TEXTS = [
    `- ${foundedLightNumbers}번째 빛을 찾았습니다!`,
    `- 홈으로 가서 남은 ${10 - foundedLightNumbers}개를 찾아보세요!`,
  ];

  const END_TEXTS = [
    '축하합니다! 10개의 빛 모두 찾으셨습니다!',
    '잠시후 메인으로 이동합니다.',
  ];

  const TEXTS = useMemo(() => (foundState === 15 ? LOGIN_TEXTS : (foundState === 11 ? START_EVENT_TEXTS : (foundState === 10 ? END_TEXTS : REDUNDANT_TEXTS))), [foundState]);

  const BUTTON_TEXTS = ['시작하기', '더 찾기', '로그인'];
  const history = useHistory();

  const buttonClick = useCallback(() => {
    if (isAuthorized) {
      history.push({
        pathname: '/',
        state: { fromLightEvent: true },
      });
    } else {
      setIsSignInModalOpen(true);
    }
  }, [isAuthorized, mission]);

  useEffect(() => {
    if (foundedLightNumbers === 10) {
      setFoundState(10);
      setTimeout(() => {
        history.push({
          pathname: '/',
          state: { fromLightEvent: true },
        });
      }, 3000);
    }
  }, [foundedLightNumbers]);

  const cancelButtonClick = useCallback(() => {
    setIsModalOpen(false);
    if (!isAuthorized) {
      setIsSignInModalOpen(true);
    }
  }, [isAuthorized]);

  return (
    <>
      <S.StyledMissionCard>
        <S.CloseButton
          onClick={() => cancelButtonClick()}
        >
          <S.CloseIcon />
        </S.CloseButton>
        <S.Contents>
          <S.Header>
            {foundState <= 10 ? '빛 찾기 이벤트' : HEADERS[foundState]}
          </S.Header>
          {
            TEXTS.map((text, i) => (
              <S.Text key={i}>{text}</S.Text>
            ))
          }
          <S.Button onClick={() => buttonClick()}>{foundState === 15 ? '로그인하기' : '홈 화면으로'}</S.Button>

        </S.Contents>
        {signInModalComponent}
      </S.StyledMissionCard>
    </>
  );
}
export default withUser(LightGuide);

LightGuide.propTypes = {

};
