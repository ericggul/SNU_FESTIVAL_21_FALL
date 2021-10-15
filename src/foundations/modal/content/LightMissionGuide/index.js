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
  const [foundState, setFoundState] = useState(pageIndicator);

  useEffect(() => {
    if (isAuthorized && isPlaying && mission.light[pageIndicator] === 0) {
      const currentLight = mission.light;
      let newArray = [...currentLight];
      newArray[pageIndicator] = 1;
      dispatch(actions.setFirestoreLight(user, newArray));
    } else {
      setFoundState(10);
    }
  }, [isAuthorized, isPlaying, mission]);

  // const TEXT_SETS = [
  //   ''
  // ]

  const REDUNDANT_TEXTS = [
    `- ${foundedLightNumbers}번째 빛을 찾았습니다!`,
    `- 홈으로 가서 남은 ${10 - foundedLightNumbers}개를 찾아보세요!`,
  ];

  const BUTTON_TEXTS = ['시작하기', '더 찾기', '로그인'];
  const history = useHistory();

  const buttonClick = useCallback(() => {
    // if (isAuthorized && isPlaying && mission.light[pageIndicator] === 0) {
    //   const currentLight = mission.light;
    //   let newArray = [...currentLight];
    //   newArray[pageIndicator] = 1;
    //   dispatch(actions.setFirestoreLight(user, newArray));
    // }
    history.push({
      pathname: '/',
      state: { fromLightEvent: true },
    });
  }, [isAuthorized, mission]);

  const cancelButtonClick = useCallback(() => {
    // if (isAuthorized && isPlaying && mission.light[pageIndicator] === 0) {
    //   const currentLight = mission.light;
    //   let newArray = [...currentLight];
    //   newArray[pageIndicator] = 1;
    //   dispatch(actions.setFirestoreLight(user, newArray));
    // }
    setIsModalOpen(false);
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
            빛 찾기 이벤트
          </S.Header>
          {
            REDUNDANT_TEXTS.map((text, i) => (
              <S.Text key={i}>{text}</S.Text>
            ))
          }
          <S.Button onClick={() => buttonClick()}>홈 화면으로</S.Button>

        </S.Contents>
      </S.StyledMissionCard>
    </>
  );
}
export default withUser(LightGuide);

LightGuide.propTypes = {

};
