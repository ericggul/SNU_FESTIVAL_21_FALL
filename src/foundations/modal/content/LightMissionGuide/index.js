import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import withUser from '@U/hoc/withUser';
import LightRio from '@I/home/LightRio.png';
import useMission from '@U/hooks/useMission';
import { useHistory } from 'react-router';
import { sumOfArray } from '@U/functions/array';
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
      console.log('here');
    }
  }, [isAuthorized, isPlaying, mission]);

  const REDUNDANT_TEXTS = [
    `- 현재 찾은 빛 총 ${foundedLightNumbers}개!.`,
    `- 홈으로 가서 남은 ${10 - foundedLightNumbers}개를 찾아보세요!`,
  ];

  const BUTTON_TEXTS = ['시작하기', '더 찾기', '로그인'];
  const history = useHistory();
  const buttonClick = useCallback(() => {
    history.push('/home');
  }, [isAuthorized]);

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
