import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import LightRio from '@I/home/LightRio.png';
import LightFinishedBack from '@I/home/LightFinishedBack.png';
import KakaoIcon from '@I/icon/kakao.svg';
import useMission from '@U/hooks/useMission';
import { sumOfArray } from '@U/functions/array';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import withUser from '@U/hoc/withUser';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/redux/mission/state';
import * as S from './styles';

function MissionCard({ setIsModalOpen, user, isAuthorized }) {
  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 63660,
    });
    // EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, []);

  return (
    <>
      <S.StyledMissionCard>
        <S.Background src={LightFinishedBack} />
        <S.CloseButton
          onClick={() => setIsModalOpen(false)}
        >
          <S.CloseIcon />
        </S.CloseButton>
        <S.Contents>
          <S.Image src={LightRio} />
          <S.Header>
            관악의 밤
            {' '}
            <S.PinkText>빛 찾기</S.PinkText>
            {' '}
            이벤트
          </S.Header>
          <S.Text>리오가 모든 빛을 찾는데 성공했어요!</S.Text>
          <S.Text>밤마다 그리워지는 아련한 그곳, 서울대학교 관악캠퍼스</S.Text>
          <S.Text>여러분들이 관악의 밤을 빛나게 만들었습니다!</S.Text>
        </S.Contents>
        <S.Share>
          <S.ShareText>카카오톡 공유하기 To. 리오</S.ShareText>
          <S.ShareText>관악의 빛나는 밤 아래에서</S.ShareText>
        </S.Share>
        <S.KakaoShare>
          <img src={KakaoIcon} alt="카카오 공유" onClick={shareThroughKakao} />
        </S.KakaoShare>

      </S.StyledMissionCard>
    </>
  );
}
export default withUser(MissionCard);

MissionCard.propTypes = {

};
